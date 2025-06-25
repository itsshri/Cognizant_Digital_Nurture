-- Create Accounts Table
CREATE TABLE Accounts (
                          AccountID NUMBER PRIMARY KEY,
                          CustomerName VARCHAR2(50),
                          AccountType VARCHAR2(20), -- SAVINGS / CURRENT
                          Balance NUMBER(10, 2)
);

-- Create Employees Table
CREATE TABLE Employees (
                           EmployeeID NUMBER PRIMARY KEY,
                           Name VARCHAR2(50),
                           Department VARCHAR2(50),
                           Salary NUMBER(10, 2)
);

-- Insert Sample Data for Accounts
INSERT INTO Accounts VALUES (101, 'Hari', 'SAVINGS', 5000);
INSERT INTO Accounts VALUES (102, 'Ravi', 'SAVINGS', 8000);
INSERT INTO Accounts VALUES (103, 'Arun', 'CURRENT', 10000);
INSERT INTO Accounts VALUES (104, 'Kumar', 'SAVINGS', 12000);

-- Insert Sample Data for Employees
INSERT INTO Employees VALUES (1, 'Asha', 'HR', 30000);
INSERT INTO Employees VALUES (2, 'Bala', 'IT', 40000);
INSERT INTO Employees VALUES (3, 'Divya', 'HR', 35000);

COMMIT;


SELECT * FROM Accounts;
SELECT * FROM Employees;

-- Exercise 3 : Scenario 1
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    FOR rec IN (
        SELECT AccountID, Balance FROM Accounts WHERE AccountType = 'SAVINGS'
        ) LOOP
            UPDATE Accounts
            SET Balance = Balance + (Balance * 0.01)
            WHERE AccountID = rec.AccountID;
        END LOOP;
    COMMIT;
END;
/


BEGIN
    ProcessMonthlyInterest;
END;
/


SELECT * FROM Accounts;

--------------------------------------------------------------------------------

-- Exercise 3 : Scenario 2
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    deptName IN VARCHAR2,
    bonusPercent IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * (bonusPercent / 100))
    WHERE Department = deptName;

    COMMIT;
END;
/


BEGIN
    UpdateEmployeeBonus('HR', 10);
END;
/


SELECT * FROM Employees;

--------------------------------------------------------------------------------

-- Exercise 3 : Scenario 3

CREATE OR REPLACE PROCEDURE TransferFunds(
    fromAccount IN NUMBER,
    toAccount IN NUMBER,
    amount IN NUMBER
) AS
    fromBal NUMBER;
BEGIN
    SELECT Balance INTO fromBal FROM Accounts WHERE AccountID = fromAccount;

    IF fromBal < amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
    END IF;

    -- Debit from source
    UPDATE Accounts
    SET Balance = Balance - amount
    WHERE AccountID = fromAccount;

    -- Credit to destination
    UPDATE Accounts
    SET Balance = Balance + amount
    WHERE AccountID = toAccount;

    COMMIT;
END;
/


BEGIN
    TransferFunds(102, 103, 1000);
END;
/

SELECT * FROM Accounts;