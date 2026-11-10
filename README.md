## Backend and data engineering, learning by building

Undergraduate student in Data Science and Big Data Technology at Southwestern University of Finance and Economics (SWUFE), expected graduation 2028. I am looking for a **2027 internship** in data engineering, Java backend, or AI application development (Chengdu / Chongqing preferred; multinational companies in China welcome).

西南财经大学 数据科学与大数据技术专业本科生，预计 2028 年毕业。正在找 **2027 年春季实习**：数据开发、Java 后端、AI 应用开发，优先成都、重庆，也关注在华外企。

I learn Python, Java and SQL by building small systems end to end, running them in CI, and writing down what they do and do not cover.

---

## Projects

All three are local, single-user projects on synthetic data, each with tests, CI and a stated list of limits. 三个项目均为本机单用户、合成数据，各有测试、CI 和限制说明。

| Role 方向 | Start here 建议先看 |
|---|---|
| Java backend Java 后端 | [DataGuard](https://github.com/wuyi060531-del/dataguard) (transactions, rules, MySQL in CI) |
| Data engineering 数据开发 | [E-Commerce Order Pipeline](https://github.com/wuyi060531-del/ecommerce-order-pipeline) (ETL, idempotent loads, SQL reconciliation) |
| AI application / full stack AI 应用 | [SignalHub](https://github.com/wuyi060531-del/signalhub) (Java + Python worker, versioned explainable scoring; optional LLM, off by default) |

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

我在 AI 编程助手（Codex 和 Claude）的辅助下完成了这些项目。 I built these projects with AI coding assistants (Codex and Claude). I set the requirements and made the design decisions; the tools helped write, review and document the code. I do not present AI-written code as solely hand-written, and each repository says the same. Test results and known limits are in each README.

## Contact

Please reach me through GitHub.
