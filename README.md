## Backend and data engineering, learning by building

Undergraduate student in Data Science and Big Data Technology at Southwestern University of Finance and Economics (SWUFE), expected graduation 2028. I am looking for a **2027 internship** in data engineering, Java backend, or AI application development.

I learn Python, Java and SQL by building small systems end to end, running them in CI, and writing down what they do and do not cover.

---

## Projects

### 1. [SignalHub](https://github.com/wuyi060531-del/signalhub): local job-intelligence workbench
Job postings expire and "skills match" does not mean "eligible". SignalHub keeps official links, job-description text and version history on your own machine, scores postings with explainable rules, and tracks applications.

- **Stack:** Java 21, Spring Boot, Python worker, PostgreSQL 17, Flyway
- **Engineering:** a Java service and a Python worker share one PostgreSQL task queue (`FOR UPDATE SKIP LOCKED`, lease fencing against stale workers); a changed job version invalidates old match scores
- **Honest limits:** single-user and local only, no authentication; a continuous 72-hour stability run has not been completed; demo data is synthetic

### 2. [DataGuard](https://github.com/wuyi060531-del/dataguard): data-quality checks for order CSV files
Upload a CSV, run deterministic rules, and get an issue list that points to the exact row and field, plus JSON and HTML reports that survive a restart.

- **Stack:** Java 21, Spring Boot, JDBC, H2 / MySQL, plain HTML/CSS/JS, Docker
- **Engineering:** report, issues and task status commit in one transaction; input size and issue-count budgets fail the whole task instead of truncating silently; CI runs the tests against a real MySQL
- **Honest limits:** single-user and local only; power-loss recovery and backup restore are not verified

### 3. [E-Commerce Order Pipeline](https://github.com/wuyi060531-del/ecommerce-order-pipeline): small batch ETL
Reads order CSV, quarantines bad rows, calculates money in integer cents, loads in one transaction, and reconciles with SQL. Re-running a load does not create duplicates.

- **Stack:** Python, Pandas, SQLite / MySQL, pytest, GitHub Actions
- **Engineering:** an audit record for every quarantined row; idempotent reloads; CI on Python 3.10 and 3.12 plus MySQL 8.4 and Docker smoke tests
- **Honest limits:** synthetic data only; benchmarks are single-machine experiments, not production figures

---

## Currently

- Practising Java backend fundamentals (Spring, transactions, testing) and SQL
- Reading other people's code, not only writing my own
- Next: more depth in data engineering tooling and API design

## About AI assistance

I built these projects with AI coding assistants (Codex and Claude). I set the requirements and made the design decisions; the tools helped write, review and document the code. I do not present AI-written code as solely hand-written, and each repository says the same. Test results and known limits are in each README.

## Contact

Please reach me through GitHub.
