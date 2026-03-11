# SonarQube Code Quality Analysis

## SonarQube Overview

![SonarQube Overview](./images/QualityReport/Overview.png)

The SonarQube analysis provides an overview of the overall code quality of the Jiancha Car Rental system. Based on the latest scan, the project **successfully passed the SonarQube Quality Gate**, which indicates that the code meets the predefined quality standards.

The analysis shows that the project currently maintains **high reliability and security**, with no detected bugs or vulnerabilities. The maintainability rating also remains **A**, although SonarQube detected a few minor code smells that could be improved.

Overall, the results suggest that the project is in **good condition in terms of code quality**, with only small improvements needed to further enhance maintainability.

---

# Quality Metrics Summary

The main quality metrics reported by SonarQube are summarized below.

| Metric | Result |
|------|------|
| Quality Gate | Passed |
| Security Issues | 0 |
| Reliability Issues | 0 |
| Maintainability Issues | 3 |
| Test Coverage | 72.9% |
| Code Duplication | 0.0% |
| Security Hotspots | 2 |

### Security

The analysis reported **0 security vulnerabilities**, which results in a **Security Rating of A**. This indicates that no known security risks were detected in the current codebase.

---

### Reliability

SonarQube also detected **0 bugs**, giving the project a **Reliability Rating of A**. This suggests that the system does not contain patterns that could lead to runtime failures or incorrect behavior.

---

### Maintainability

The system currently has **3 maintainability issues**, which are classified as **code smells**. These issues do not affect the functionality of the system but indicate areas where the code structure or style could be improved.

Despite these minor issues, the project still receives a **Maintainability Rating of A**, meaning the overall codebase remains clean and manageable.

---

### Test Coverage

The project currently has **72.9% test coverage**, based on **308 lines of code that are considered for coverage**.

This indicates that a large portion of the system's functionality is covered by automated tests. Having this level of coverage helps ensure that the system behaves correctly and reduces the risk of introducing bugs when modifying the code.

However, there is still room for improvement, and increasing test coverage could further strengthen the reliability of the system.

---

### Code Duplication

The analysis reports **0.0% code duplication across 598 lines of code**, which is a positive indicator of code quality.

Low duplication helps improve maintainability because changes only need to be made in one place rather than multiple duplicated sections of code.

---

### Security Hotspots
![Security Hotspot Analysis Result](./images/QualityReport/SecurityHotspots.png)

The SonarQube analysis identified **2 security hotspots** in the project. Security hotspots are not confirmed vulnerabilities, but they highlight parts of the code that may involve **security-sensitive configurations** and therefore require manual review by developers.

Both hotspots detected in this project are categorized as **Low review priority**, meaning they do not immediately indicate a critical security risk but should still be examined to ensure the system is configured securely.

---

### Hotspot 1: CORS Configuration

**Category:** Insecure Configuration  
**Location:** `implementations/backend/src/app.js`  

SonarQube flagged the configuration of **Cross-Origin Resource Sharing (CORS)** in the Express application. The code allows requests from any origin using the following configuration:

```javascript
origin: '*'
```
---

# Issue Analysis

![Analyzed Issues](./images/QualityReport/Issues.png)

SonarQube identified **three maintainability issues** within the project. These issues mainly relate to code readability and data structure usage rather than functional errors.

## Issue 1: Using Array Instead of Set for Promo Code Checking

**File:** `bookingController.js`  
**Severity:** Medium

In this file, the variable `VALID_PROMO_CODES` is implemented as an **Array** and is used to check whether a promo code exists.

SonarQube recommends using a **Set** instead, together with the `.has()` method, for checking membership. This is because Sets are optimized for existence checking, making them more efficient than Arrays when performing repeated lookups.

Although the difference may be small in this project, using the correct data structure improves both performance and code clarity.

---

## Issue 2: Unexpected Negated Condition

**File:** `staffCarController.js`  
**Severity:** Low

This issue indicates that a **negated logical condition** is used in the code. While this is not incorrect, such expressions can sometimes make the code harder to read.

Refactoring the condition into a clearer form can make the logic easier to understand for other developers and improve the overall readability of the code.

---

## Issue 3: Using Array Instead of Set for Column Checking

**File:** `db.js`  
**Severity:** Medium

A similar issue appears in `db.js`, where `columnNames` is stored as an **Array** but is used to check whether a column exists.

SonarQube recommends converting this structure to a **Set** and using `.has()` instead. This approach better reflects the intended purpose of the data structure and allows faster lookup operations.

---

# Discussion

Overall, the SonarQube analysis indicates that the Jiancha Car Rental project maintains **good code quality**. The system successfully passes the Quality Gate and achieves **A ratings for security, reliability, and maintainability**.

One of the positive aspects of the project is that **no bugs or security vulnerabilities were detected**, which suggests that the current implementation follows relatively safe and stable coding practices.

The maintainability issues detected are relatively minor and mainly related to **data structure choice and code readability**. Addressing these code smells would further improve the clarity and efficiency of the code.

The project also shows **72.9% test coverage**, which indicates that automated tests cover a substantial portion of the system. While this level of coverage already provides a reasonable level of confidence in the system, increasing the coverage could help ensure even greater reliability in future development.

Another strong point is the **absence of code duplication**, which helps keep the codebase easier to maintain and reduces the risk of inconsistencies when changes are made.

Overall, the project demonstrates **solid code quality with only minor areas for improvement**, making it easier to maintain and extend in future development.

---

# Conclusion

The SonarQube analysis confirms that the Jiancha Car Rental project meets the required quality standards and successfully **passes the Quality Gate**.

The system currently has:

- **0 bugs**
- **0 vulnerabilities**
- **3 maintainability issues**
- **72.9% test coverage**
- **0% code duplication**

While the project already demonstrates strong code quality, addressing the identified maintainability issues and continuing to improve test coverage would further enhance the robustness and maintainability of the system in the long term.