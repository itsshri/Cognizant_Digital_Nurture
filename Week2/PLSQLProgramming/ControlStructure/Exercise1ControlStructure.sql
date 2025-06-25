-- Cleanup if needed
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Loans';
  EXECUTE IMMEDIATE 'DROP TABLE Customers';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- Create Customers Table
CREATE TABLE Customers (
  CustomerID NUMBER PRIMARY KEY,
  Name VARCHAR2(50),
  Age NUMBER,
  Balance NUMBER(10, 2),
  IsVIP VARCHAR2(5)
);

-- Create Loans Table
CREATE TABLE Loans (
  LoanID NUMBER PRIMARY KEY,
  CustomerID NUMBER,
  InterestRate NUMBER(5, 2),
  DueDate DATE,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Insert Data
INSERT INTO Customers VALUES (1, 'Shri', 65, 20000, 'FALSE');
INSERT INTO Customers VALUES (2, 'Ram', 45, 9000, 'FALSE');
INSERT INTO Customers VALUES (3, 'Naveen', 70, 12000, 'FALSE');

INSERT INTO Loans VALUES (101, 1, 8.5, SYSDATE + 20);
INSERT INTO Loans VALUES (102, 2, 9.0, SYSDATE + 40);
INSERT INTO Loans VALUES (103, 3, 7.0, SYSDATE + 10);

COMMIT;

-- Check tables
SELECT * FROM Customers;
SELECT * FROM Loans;

--------------------------------------------------------------------------------
-- Exercise 1: Apply 1% Discount if Age > 60
BEGIN
  FOR rec IN (
    SELECT l.LoanID
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE c.Age > 60
  ) LOOP
    UPDATE Loans
    SET InterestRate = InterestRate - 1
    WHERE LoanID = rec.LoanID;
  END LOOP;
  COMMIT;
END;
/

-- Check updated Loans table
SELECT * FROM Loans;

--------------------------------------------------------------------------------
-- Exercise 2: Set IsVIP = TRUE for Balance > 10000
BEGIN
  FOR rec IN (
    SELECT CustomerID FROM Customers WHERE Balance > 10000
  ) LOOP
    UPDATE Customers
    SET IsVIP = 'TRUE'
    WHERE CustomerID = rec.CustomerID;
  END LOOP;
  COMMIT;
END;
/

-- Check updated Customers table
SELECT * FROM Customers;

--------------------------------------------------------------------------------
-- Exercise 3: Print Loan Reminders (due in 30 days)

-- Ensure DBMS Output is enabled in VS Code (Run: "Oracle: Enable DBMS Output" from Command Palette)
BEGIN
  FOR rec IN (
    SELECT l.LoanID, l.DueDate, c.Name
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.LoanID ||
                         ' for ' || rec.Name ||
                         ' is due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/