import {
  LanguageProficiency,
  type Company,
  type Education,
  type Language,
  type Project,
  type SkillCategory,
} from "@/types"

export const companies: Company[] = [
  {
    name: "Scopely, Inc.",
    logo: "/1.jpg",
    positions: [
      {
        title: "Senior Lead Software Engineer",
        duration: "Jun 2023 – Jun 2025",
        description: [
          "Designed and implemented a modular game engine architecture to support multiple real-time multiplayer games, improving development velocity by 70% and decreasing regression issues by 40% through unified component reuse.",
          "Built scalable matchmaking microservices using Go and WebSocket to handle 10x the standard user concurrency, integrating real-time latency scoring to ensure optimal player distribution.",
          "Refactored legacy backend architecture from Java monoliths into Kubernetes-based microservices using Helm and Istio, reducing deployment complexity and enabling environment parity with 80% faster CI/CD pipelines.",
          "Developed real-time analytics ingestion pipelines using Kafka, Redis Streams, and Prometheus, allowing in-game telemetry to be aggregated and visualized with 4x the prior performance.",
          "Collaborated with client teams to define and implement resilient WebRTC data channels for low-latency multiplayer communications across mobile and console platforms.",
          "Orchestrated a multi-region infrastructure deployment using Terraform and EKS to support global events with seamless failover and 99.999% uptime.",
          "Designed Redis-backed caching strategies and query optimizations to reduce average database load by 55% while supporting complex leaderboard and inventory logic.",
          "Mentored junior developers and interns on algorithmic efficiency, conducting weekly code review sessions that improved team productivity and knowledge sharing.",
          "Integrated advanced metrics dashboards with Grafana and Prometheus that monitored WebSocket traffic health, improving incident detection and reducing MTTR by 60%.",
          "Implemented structured logging and distributed tracing via OpenTelemetry to enhance observability and root-cause analysis of production issues.",
          "Automated the testing framework with Cypress and Jest to ensure end-to-end coverage, reducing production bugs by 30% over two quarters.",
          "Spearheaded security audits and improvements using OWASP standards, resulting in a zero-issue report during the annual penetration testing review.",
          "Worked with product and UX teams to design scalable and interactive game interfaces that maintained 60+ FPS across all devices during heavy traffic conditions.",
          "Deployed a metrics-driven A/B testing platform to evaluate new gameplay mechanics, resulting in a 20% increase in average session time.",
          "Led cross-functional engineering pods in agile sprints, refining estimation and planning strategies that improved sprint accuracy and delivery timelines."
        ],
      },
    ],
    technologies: ["WebSocket", "Go", "Redis", "PostgreSQL", "Helm", "Prometheus", "Istio", "Cypress", "OpenTelemetry", "Jest"],
  },
  {
    name: "Cribl, Inc.",
    logo: "/2.png",
    positions: [
      {
        title: "Staff Software Engineer",
        duration: "Jun 2021 – May 2023",
        description: [
          "Redesigned Cribl’s core log-routing engine using advanced concurrency models in Go, achieving a 3x throughput improvement and reducing AWS instance CPU usage by 40% under high-load conditions.",
          "Created a real-time data enrichment microservice using Redis and Kafka, capable of maintaining <50ms processing latency while adapting to evolving schema requirements on-the-fly.",
          "Developed a plug-in-based log transformation framework used by 150+ enterprise teams, improving flexibility without sacrificing reliability or runtime performance.",
          "Led the implementation of Prometheus-based observability stack and Grafana dashboards, reducing time-to-detect critical issues by 60% across staging and production environments.",
          "Built Kafka-based message reprocessing engine to support log replay capabilities, enabling 99.9% fidelity on ingestion event restoration within fault-tolerant systems.",
          "esigned shard-balancing algorithm for high-throughput ingest nodes that adjusted routing dynamically, increasing system stability during peak traffic surges by 5x.",
          "Automated build-and-deploy pipelines with Jenkins and GitHub Actions, reducing manual deployment errors and tripling the weekly release cadence.",
          "Rolled out distributed tracing with OpenTelemetry across microservices, greatly improving root-cause diagnostics for production outages.",
          "Mentored three engineers on Go performance profiling and channel-safe patterns, fostering a team-wide culture of efficiency and precision.",
          "Integrated ClickHouse as a long-term log archive store, fine-tuning partitioning and compression for a 40% storage cost reduction.",
          "Partnered with product team to design flexible APIs for log sampling and redaction, driving compliance with customer retention policies.",
          "Co-authored internal RFCs on data pipeline resilience and schema evolution best practices, standardizing project planning across engineering squads.",
          "Conducted performance load testing using Vegeta and K6, identifying critical optimizations that prevented downtime during major customer onboarding.",
          "Introduced chaos engineering tests for message queue failure scenarios, which increased recovery time consistency and improved incident confidence.",
          "Delivered monthly engineering talks on observability patterns and system tuning, increasing cross-team adoption of best practices."
        ],
      },
    ],
    technologies: ["Kafka", "ClickHouse", "GitHub Actions", "Jenkins", "Grafana", "Vegeta", "OpenTelemetry", "Go", "RabbitMQ", "CircleCI"],
  },
  {
    name: "Druva Inc.",
    logo: "/3.png",
    positions: [
      {
        title: "Senior Software Engineer",
        duration: "Jun 2019 – May 2021",
        description: [
          "Designed SaaS backup orchestration system with consistent snapshot management using DynamoDB, which reduced backup time by 50% and scaled to petabyte workloads.Architected global SaaS backup architecture handling petabytes of data across multi-cloud platforms.",
          "Built Lambda-based ingestion microservices using event triggers from S3 and SNS to process real-time backups with a cold start time optimized to under 300ms.",
          "Deployed high-availability metadata layer using Redis and DynamoDB for geo-redundant nodes with consistent access times under 50ms, achieving 99.999% durability.",
          "Tuned PostgreSQL indexes and PostgreSQL-to-Aurora migrations for performance gains of 2x during peak IOPS workloads on the backup metadata path.",
          "Integrated encryption-at-rest and IAM-based access control policies to ensure compliance with SOC2 and HIPAA standards, validated by third-party audits.",
          "Created internal library for backup snapshot versioning, standardized across products and reducing integration effort across teams.",
          "Reduced cloud spend by 35% using S3 tiering and lifecycle automation rules tailored to data access heuristics, saving over $50K monthly.",
          "Built dashboards in Datadog and Grafana to track job-level metrics across backup retries, improving visibility and reducing incident MTTR by 55%.",
          "Implemented secure multi-tenant backup with isolation guarantees, leveraging namespace-aware queuing and multi-tenant tagging throughout backend flows.",
          "Led a roadmap initiative to migrate the legacy cron scheduler to Airflow, reducing job overlap incidents and improving observability of long-running tasks.",
          "Ran game-day testing simulations for system failover scenarios and built internal runbooks that improved on-call engineer response time.",
          "Spearheaded transition to event-driven data workflows using Kafka, improving data consistency and decoupling backup orchestration from real-time logging.",
          "Mentored two junior engineers and created onboarding material focused on distributed system debugging and cloud cost awareness.",
          "Presented at Dev Day on “Building Snapshot Systems at Scale,” sharing techniques for conflict resolution in versioned backups.",
          "Defined OKRs for backend team including SLAs and throughput goals, aligned quarterly performance tracking with engineering leadership.",
        ],
      },
    ],
    technologies: ["AWS Lambda", "S3", "DynamoDB", "Aurora PostgreSQL", "Airflow", "Datadog", "PgHero", "Terraform", "GraphQL", "SNS/SQS"],
  },
  {
    name: "Tebra",
    logo: "/4.png",
    positions: [
      {
        title: "Staff Engineer, Backend Services",
        duration: "Jan 2017 – May 2019",
        description: [
          "Developed Go and Node.js microservices for healthcare scheduling, billing, and real-time communication, supporting 99.99% uptime and HIPAA-grade audit trails.",
          "Architected ML-powered clinical documentation tool using PyTorch and TensorFlow that automated charting, cutting physician workload by 50% with 90%+ accuracy.",
          "Led the monolith-to-Kubernetes migration, reducing deployment times from hours to minutes and enabling self-service dev environments using Helm templates.",
          "Built insurance eligibility verification microservice interfacing with clearinghouses and payer APIs, processing $50M/month in claims with <0.1% rejection rate.",
          "Established secure JWT + OAuth2 token exchange between frontend apps and backend APIs, standardizing auth flows and third-party integrations.",
          "Defined GraphQL API schema across frontend and mobile platforms to streamline client-side logic and minimize overfetching.",
          "Automated patient reminders and notifications using AWS SES/SNS queues with deduplication logic, increasing appointment adherence by 25%.",
          "Constructed scalable lab order pipeline with error retries, state transitions, and audit logs, reducing manual intervention from support staff.",
          "Introduced environment-specific feature flags and phased rollouts using LaunchDarkly to support safe experimentation and reduce hotfixes.",
          "Monitored API and DB query performance with Datadog and PgHero, leading query rewrites that dropped average response time by 40%.",
          "Facilitated cross-functional standups, retrospectives, and planning rituals with Product and Design, reducing delivery misalignment across verticals.",
          "Mentored junior developers and wrote internal guides on optimizing backend performance and real-time system reliability.",
          "Participated in triage rotations and managed escalated issues during production outages, building a knowledge base from root cause summaries.",
          "Contributed to annual security audit by hardening endpoints, eliminating secrets in code, and implementing secure headers via middleware.",
          "Delivered training workshops on REST/GraphQL architecture tradeoffs and data integrity validation for clinical datasets."
        ],
      },
    ],
    technologies: ["Node.js", "TensorFlow", "PyTorch", "LaunchDarkly", "MongoDB", "OAuth 2.0", "TypeScript", "Neo4j", "RabbitMQ", "AWS SES"],
  },
  {
    name: "SymphonyAI",
    logo: "/5.png",
    positions: [
      {
        title: "Machine Learning Engineer",
        duration: "Jun 2014 – Dec 2016",
        description: [
          "Designed distributed ML pipelines with Kubeflow and Airflow to process 50TB/month sensor and transaction data, incorporating model drift detection and rollback strategies.",
          "Implemented computer vision systems for object recognition using YOLOv2 and ONNX optimization, improving inference latency at the edge by 35%.",
          "Built real-time inference services using gRPC and CUDA-accelerated TensorFlow, deploying via NVIDIA Jetson devices for industrial customers.",
          "Integrated PPML methods with Intel SGX-based enclaves for confidential ML, satisfying security compliance for banking and manufacturing customers.",
          "Automated model lifecycle management using MLflow, DVC, and Jenkins, reducing model promotion time from staging to production by 70%.",
          "Created internal tools for experiment tracking and visual regression reporting, now adopted as standard for all ML teams.",
          "Published internal whitepapers on multi-stage pipeline orchestration and secure federated learning protocols.",
          "Collaborated with product and engineering teams to scope and deliver ML-backed features in fraud detection and asset monitoring.",
          "Deployed Spark-based ETL jobs to clean and normalize incoming data streams before training phases, supporting 100M+ records per day.",
          "Partnered with QA to define synthetic test datasets, automating validation steps in training and deployment pipelines.",
          "Led data privacy reviews to ensure anonymization of PII during preprocessing and downstream modeling stages.",
          "Delivered monthly internal lectures on explainable AI (XAI) and bias detection in industrial predictive models.",
          "Worked with DevOps to optimize Kubernetes node pools and GPU utilization for continuous training workloads.",
          "Mentored ML interns on data wrangling, hyperparameter tuning, and serving models under tight latency constraints.",
          "Filed three patent disclosures on ML infrastructure improvements related to data caching and real-time feedback loops."
        ],
      },
    ],
    technologies: ["Kubeflow", "MLflow", "ONNX", "YOLOv2", "Scikit-learn", "DVC", "NVIDIA Jetson", "Spark", "gRPC", "CUDA"],
  },
]

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California",
    location: "Los Angeles, CA",
    duration: "Sep 2012 – May 2014",
    description:
      "Graduated with 3.81 GPA and Dean's List for 4 semesters. Concentrations in software engineering, web development and full-stack development.",
    logo: "/6.png",
  },
  {
    degree: "Associate of Science in Mathematics and Computer Science",
    institution: "Mt. San Jacinto College",
    location: "San Jacinto, CA",
    duration: "Sep 2010 – Jun 2012",
    description:
      "Completed transfer-focused STEM curriculum with emphasis on algorithms, discrete mathematics, and programming fundamentals.",
    logo: "/7.png",
  },
]

export const projects: Project[] = 
[
  {
    "title": "Cross-Platform Game Engine Framework",
    "company": "Scopely, Inc.",
    "description": "Architected a modular engine in Go and Node.js that unified rendering, physics, and networking layers across three flagship titles, boosting code-reuse by 70 % and lowering regressions by 40 % while sustaining 60 + FPS on mobile and console.",
    "thumbnail": "/scopely-engine.png",
    "skills": ["Go", "Node.js", "WebSocket", "Redis", "PostgreSQL", "Helm", "Kubernetes", "Istio", "Prometheus", "Grafana"],
    "link": null,
    "duration": "Jun 2023 – Feb 2024"
  },
  {
    "title": "Real-Time Matchmaking Microservices",
    "company": "Scopely, Inc.",
    "description": "Designed latency-aware matchmaking services with weighted-queue algorithms and Redis pub/sub, scaling to 10× concurrent players and delivering sub-50 ms pairing times during global live events.",
    "thumbnail": "/scopely-matchmaking.png",
    "skills": ["Go", "Redis", "WebSocket", "OpenTelemetry", "Kubernetes", "CI/CD", "Terraform", "AWS", "Grafana", "Jest"],
    "link": null,
    "duration": "Mar 2024 – Jun 2025"
  },
  {
    "title": "Telemetry Analytics Pipeline",
    "company": "Scopely, Inc.",
    "description": "Implemented Kafka-backed event ingestion with Prometheus exporters and time-series dashboards, increasing analytics throughput 4× and cutting incident MTTR by 60 %.",
    "thumbnail": "/scopely-telemetry.png",
    "skills": ["Kafka", "Prometheus", "Grafana", "PostgreSQL", "Kubernetes", "Helm", "Go", "OpenTelemetry", "AWS", "ArgoCD"],
    "link": null,
    "duration": "Jul 2024 – Jun 2025"
  },
  {
    "title": "Core Log-Routing Engine Redesign",
    "company": "Cribl, Inc.",
    "description": "Re-engineered the Go-based streaming core with lock-free data structures and back-pressure controls, tripling throughput and trimming CPU usage by 40 % on production clusters.",
    "thumbnail": "/cribl-routing.png",
    "skills": ["Go", "Kafka", "OpenTelemetry", "Prometheus", "Grafana", "AWS", "Jenkins", "GitHub Actions", "Kubernetes", "Vegeta"],
    "link": null,
    "duration": "Jun 2021 – Feb 2022"
  },
  {
    "title": "Real-Time Data Enrichment Service",
    "company": "Cribl, Inc.",
    "description": "Built a Redis-backed enrichment microservice that appended context to billions of log events per day with < 50 ms latency, enabling fine-grained routing and compliance filtering.",
    "thumbnail": "/cribl-enrichment.png",
    "skills": ["Redis", "Kafka", "Go", "ClickHouse", "Kubernetes", "CircleCI", "Grafana", "JSON Schema", "gRPC", "Docker"],
    "link": null,
    "duration": "Mar 2022 – Dec 2022"
  },
  {
    "title": "Data Replay & Log Reprocessing Platform",
    "company": "Cribl, Inc.",
    "description": "Delivered a Kafka-based replay engine with idempotent writes and schema-evolution support, achieving 99.9 % fidelity for backfilling analytics stores without downtime.",
    "thumbnail": "/cribl-replay.png",
    "skills": ["Kafka", "ClickHouse", "OpenTelemetry", "Jenkins", "Kubernetes", "Go", "gRPC", "Terraform", "AWS EKS", "Grafana"],
    "link": null,
    "duration": "Jan 2023 – May 2023"
  },
  {
    "title": "Cloud Snapshot Orchestration Platform",
    "company": "Druva Inc.",
    "description": "Designed a multi-cloud snapshot manager using DynamoDB and AWS Step Functions that cut backup windows by 50 % and handled petabyte-scale datasets with automated consistency checks.",
    "thumbnail": "/druva-snapshot.png",
    "skills": ["AWS Lambda", "DynamoDB", "Step Functions", "S3", "Aurora PostgreSQL", "Terraform", "Airflow", "Datadog", "Python", "Go"],
    "link": null,
    "duration": "Jun 2019 – Apr 2020"
  },
  {
    "title": "Serverless Backup Ingestion Microservices",
    "company": "Druva Inc.",
    "description": "Implemented event-driven Lambda pipelines triggered by S3 and SNS that processed 10× more backups with cold-start latencies reduced to 300 ms, improving RPO targets company-wide.",
    "thumbnail": "/druva-ingestion.png",
    "skills": ["AWS Lambda", "S3", "SNS", "Python", "Node.js", "CloudWatch", "CI/CD", "GraphQL", "Datadog", "Kinesis"],
    "link": null,
    "duration": "May 2020 – Jan 2021"
  },
  {
    "title": "Cost-Optimized Storage Tiering",
    "company": "Druva Inc.",
    "description": "Authored S3 lifecycle and intelligent-tiering policies with predictive access heuristics, saving 35 % in monthly storage spend while maintaining sub-second restore times for hot data.",
    "thumbnail": "/druva-tiering.png",
    "skills": ["S3 Intelligent-Tiering", "Terraform", "Airflow", "Python", "Datadog", "Athena", "Redshift", "AWS Glue", "Cost Explorer", "Boto3"],
    "link": null,
    "duration": "Feb 2021 – May 2021"
  },
  {
    "title": "AI Note Assist Clinical Documentation",
    "company": "Tebra",
    "description": "Integrated TensorFlow-powered NLP service into EHR workflows, auto-populating 90 % of clinical notes and halving physician documentation time while maintaining HIPAA compliance.",
    "thumbnail": "/tebra-noteassist.png",
    "skills": ["TensorFlow", "Node.js", "Go", "Kubernetes", "PostgreSQL", "GraphQL", "AWS SES", "OAuth 2.0", "LaunchDarkly", "Prometheus"],
    "link": null,
    "duration": "Jan 2018 – Jun 2018"
  },
  {
    "title": "HIPAA-Compliant Claims Data Pipeline",
    "company": "Tebra",
    "description": "Built a Go microservice interfacing with clearing-house APIs to validate and submit $50 M+ monthly claims with 99.9 % accuracy, featuring retry orchestration and audit logging.",
    "thumbnail": "/tebra-claims.png",
    "skills": ["Go", "Node.js", "DynamoDB", "Kafka", "Kubernetes", "AWS SQS", "PostgreSQL", "Datadog", "Terraform", "CI/CD"],
    "link": null,
    "duration": "Jul 2018 – Feb 2019"
  },
  {
    "title": "Kubernetes Migration of EHR Platform",
    "company": "Tebra",
    "description": "Led migration of monolithic services to Kubernetes with Helm and ArgoCD, slashing deploy times from hours to minutes and enabling per-branch review apps for rapid QA.",
    "thumbnail": "/tebra-k8s.png",
    "skills": ["Kubernetes", "Helm", "ArgoCD", "Node.js", "Go", "CI/CD", "Grafana", "PostgreSQL", "AWS EKS", "LaunchDarkly"],
    "link": null,
    "duration": "Mar 2019 – May 2019"
  },
  {
    "title": "Distributed ML Pipeline for Industrial Sensors",
    "company": "SymphonyAI",
    "description": "Created a Kubeflow-based training pipeline processing 50 TB/month of sensor data with automatic drift detection, reducing retraining effort by 80 % and boosting model accuracy by 15 %.",
    "thumbnail": "/symphony-mlpipeline.png",
    "skills": ["Kubeflow", "TensorFlow", "Airflow", "Spark", "MLflow", "DVC", "Python", "gRPC", "Docker", "Kubernetes"],
    "link": null,
    "duration": "Jun 2014 – Oct 2015"
  },
  {
    "title": "Shelf Recognition Computer Vision System",
    "company": "SymphonyAI",
    "description": "Developed ONNX-optimized YOLOv2 models deployed on NVIDIA Jetson devices, improving shelf-stock detection precision by 20 % and enabling real-time inventory analytics for retail clients.",
    "thumbnail": "/symphony-cv.png",
    "skills": ["ONNX", "YOLOv2", "CUDA", "NVIDIA Jetson", "TensorRT", "gRPC", "Python", "OpenCV", "Edge AI", "Kubernetes"],
    "link": null,
    "duration": "Nov 2015 – Jun 2016"
  },
  {
    "title": "PPML Secure Inference Framework",
    "company": "SymphonyAI",
    "description": "Implemented privacy-preserving ML workflows using Intel SGX enclaves and remote attestation, enabling confidential inference for finance and manufacturing partners under strict compliance regimes.",
    "thumbnail": "/symphony-ppml.png",
    "skills": ["Intel SGX", "TensorFlow", "gRPC", "Go", "Kubeflow", "Airflow", "Python", "Encryption", "TLS", "CI/CD"],
    "link": null,
    "duration": "Jul 2016 – Dec 2016"
  }
]


export const skillCategories: SkillCategory[] = [
  {
    "name": "Frontend",
    "skills": [
      { "name": "React",        "level": 5 },
      { "name": "Next.js",      "level": 5 },
      { "name": "Tailwind CSS", "level": 5 },
      { "name": "Flutter / Dart","level": 4 },
      { "name": "GraphQL Client (Apollo, URQL)", "level": 4 }
    ]
  },
  {
    "name": "Languages",
    "skills": [
      { "name": "Java / C++",          "level": 5 },
      { "name": "TypeScript",  "level": 5 },
      { "name": "JavaScript",      "level": 5 },
      { "name": "Python",  "level": 5 },
      { "name": "Go",  "level": 4 }
    ]
  },
  {
    "name": "Backend & Frameworks",
    "skills": [
      { "name": "Node.js / Express",       "level": 5 },
      { "name": "gRPC / REST / GraphQL",   "level": 5 },
      { "name": "Kafka & Event Streaming", "level": 4 },
      { "name": "WebSocket / WebRTC",      "level": 4 },
      { "name": "Gin / Fiber (Go)",        "level": 4 }
    ]
  },
  {
    "name": "Cloud & DevOps",
    "skills": [
      { "name": "AWS / GCP / Azure",          "level": 5 },
      { "name": "Kubernetes + Helm",          "level": 5 },
      { "name": "Docker & Terraform",         "level": 4 },
      { "name": "CI/CD (Jenkins, GitHub Actions)", "level": 4 },
      { "name": "ArgoCD / Spinnaker",         "level": 3 }
    ]
  },
  {
    "name": "Datastores & Caching",
    "skills": [
      { "name": "PostgreSQL / PL-pgSQL", "level": 5 },
      { "name": "Redis / DynamoDB",      "level": 4 },
      { "name": "MongoDB / MySQL",       "level": 4 },
      { "name": "Cassandra / Elasticsearch","level": 3 },
      { "name": "Neo4j (Graph DB)",      "level": 3 }
    ]
  },
  {
    "name": "ML & Data Processing",
    "skills": [
      { "name": "TensorFlow / PyTorch",  "level": 5 },
      { "name": "Kubeflow / MLflow",     "level": 4 },
      { "name": "Spark & Big-Data ETL",  "level": 3 },
      { "name": "Airflow / DVC",         "level": 3 },
      { "name": "Scikit-learn",          "level": 3 }
    ]
  },
  {
    "name": "Monitoring & Observability",
    "skills": [
      { "name": "Prometheus & Grafana",  "level": 5 },
      { "name": "Datadog / Sentry",      "level": 4 },
      { "name": "OpenTelemetry",         "level": 4 },
      { "name": "Chaos / Load Testing (Vegeta, k6)", "level": 3 }
    ]
  }
];


export const languages: Language[] = [
  { name: "English", proficiency: LanguageProficiency.Fluent, level: 5 },
  { name: "Spanish", proficiency: LanguageProficiency.Native, level: 5 },
]
