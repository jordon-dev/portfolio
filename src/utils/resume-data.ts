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
    name: "Nowy",
    logo: "/1.png",
    positions: [
      {
        title: "Senior Software Engineer",
        duration: "Jul 2022 – Jul 2025",
        description: [
          "Built <strong>React/TypeScript frontend</strong> with Redux state management for itinerary builder, reducing user booking steps by 40%.",
          "Developed <strong>Node.js/Express ERST APIs</strong> for travel inventory search, integrating with Amadeus/Sabre GDS systems.",
          "Created <strong>real-time collaborative features</strong> using WebSockets (Socket.io) for group trip planning, increasing session duration by 25%.",
          "Designed <strong>PostgreSQL schemas</strong> for user profiles, bookings, and preferences with 99.9% query uptime via connection pooling.",
          "Implemented <strong>client-side caching</strong> with React Query, reducing API calls by 60% and improving mobile app responsiveness.",
          "Built <strong>admin dashboard</strong> with Material-UI components for content moderation, handling 10K+ daily user submissions.",
          "Optimized <strong>frontend bundle size</strong> by 70% using code splitting and Next.js dynamic imports, improving Lighthouse scores to 95%.",
          "Created <strong>payment processing module</strong> integrating Stripe Elements with backend fraud detection, reducing chargebacks by 15%.",
          "Engineered <strong>Python FastAPI microservices</strong> for video processing (FFmpeg), extracting metadata from 10K+ daily TikTok/Instagram clips.",
          "Developed <strong>recommendation engine</strong> using collaborative filtering (Surprise library), increasing cross-sell revenue by 30%.",
          "Implemented <strong>real-time itinerary pricing</strong> with Redis-based rate caching, updating prices in <100ms during demand spikes.",
          "Built <strong>Go-based gRPC services</strong> for user authentication and session management, handling 50K+ concurrent users.",
          "Created <strong>data pipeline</strong> with Kafka and Spark for user behavior analytics, powering personalized travel suggestions.",
          "Containerized full-stack apps with <strong>Docker/Kubernetes</strong>, achieving 99.99% uptime during viral traffic events.",
          "Set up <strong>CI/CD pipelines</strong> (GitHub Actions) for automated testing/deployment, reducing release cycles from 2 weeks to 2 days.",
          "Implemented <strong>monitoring dashboards</strong> (Grafana) tracking frontend errors, API latency, and conversion funnels.",
        ],
      },
    ],
    technologies: ["Go", "Python", "GKE", "Redis", "RabbitMQ", "GraphQL", "TensorFlow Lite", "CLIP", "MiniLM", "HNSW", "Kubeflow", "OpenTelemetry", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Material-UI", "Next.js", "Stripe", "FFmpeg", "Surprise", "Kafka", "Spark", "Docker", "Kubernetes", "GitHub Actions", "Grafana"],
  },
  {
    name: "SearchLight",
    logo: "/2.png",
    positions: [
      {
        title: "Senior Software Engineer",
        duration: "Jan 2019 – Jun 2022",
        description: [
          "Built <strong>React-based assessment interface</strong> with drag-and-drop components, reducing candidate evaluation time by 50%.",
          "Created <strong>GraphQL API</strong> (Apollo Server) unifying candidate data from 5+ sources, improving data consistency by 90%.",
          "Developed <strong>candidate matching UI</strong> with D3.js visualizations, increasing recruiter adoption by 35%.",
          "Designed <strong>MongoDB schemas</strong> for unstructured candidate data with flexible indexing, supporting 100M+ records.",
          "Implemented <strong>real-time chat system</strong> (Twilio API) for recruiter-candidate communication, reducing time-to-hire by 20%.",
          "Built <strong>client reporting portal</strong> with exportable PDFs (Puppeteer), generating $1.1M in new annual revenue.",
          "Optimized <strong>mobile-responsive forms</strong> using React Hook Form, cutting form abandonment by 45%.",
          "Created <strong>role-based access control</strong> (RBAC) system with JWT tokens, supporting 50+ enterprise clients.",
          "Developed <strong>NLP bias detection models</strong> (spaCy/Scikit-learn) analyzing job descriptions, reducing gendered language by 43%.",
          "Built <strong>candidate scoring algorithm</strong> using XGBoost, improving match accuracy by 28% compared to manual screening.",
          "Engineered <strong>real-time feedback system</strong> with WebSocket notifications, updating candidate rankings in <200ms.",
          "Created <strong>ETL pipelines</strong> (Airflow) processing HRIS data from Workday/LinkedIn, handling 50K+ daily syncs.",
          "Implemented <strong>A/B testing framework</strong> for UI variations, increasing conversion rates by 15% through data-driven design.",
          "Migrated <strong>monolith to microservices</strong> (Node.js/Python), reducing deployment failures by 70% with canary releases.",
          "Set up <strong>automated testing</strong> with Jest/Cypress, achieving 85% test coverage and reducing production bugs by 60%.",
          "Configured <strong>cloud infrastructure</strong> (AWS) with auto-scaling groups, handling 3x traffic spikes during hiring seasons.",
        ],
      },
    ],
    technologies: ["Scala", "Akka Streams", "Kubeflow", "GraphQL", "React", "Tailwind", "AWS Fargate", "Rekognition", "OpenTelemetry", "Jest", "Playwright", "Datadog RUM", "Puppeteer", "Twilio", "XGBoost", "Airflow", "JWT", "Scikit-learn", "D3.js", "MongoDB", "MongoDB Atlas", "Node.js", "Python", "AWS", "GCP", "Azure", "Kubernetes", "Helm", "Docker", "Terraform", "CI/CD", "Jenkins", "GitHub Actions", "Grafana", "Datadog", "Sentry", "OpenTelemetry", "Chaos", "Load Testing", "Vegeta", "k6"],
  },
  {
    name: "Druva Inc.",
    logo: "/3.png",
    positions: [
      {
        title: "Software Engineer",
        duration: "Jun 2014 – Dec 2018",
        description: [
          "Built <strong>Angular dashboard</strong> with real-time network topology visualization (D3.js), reducing threat detection time by 60%.",
          "Created <strong>RESTful APIs</strong> (Express.js) for device configuration management, supporting 10K+ network devices.",
          "Developed <strong>alert management system</strong> with React components, enabling custom rule creation for security teams.",
          "Designed <strong>TimescaleDB schemas</strong> for network telemetry data, optimizing queries for 1M+ events/sec ingestion.",
          "Implemented <strong>client-side data filtering</strong> with Web Workers, improving UI responsiveness for large datasets.",
          "Built <strong>compliance reporting module</strong> generating PDF/Excel exports, reducing audit preparation time by 70%.",
          "Created <strong>mobile-responsive UI</strong> for on-call engineers, enabling threat response from any device.",
          "Developed <strong>user onboarding flow</strong> with interactive tutorials, increasing new user activation by 40%.",
          "Engineered <strong>real-time anomaly detection</strong> using Python/Pandas, reducing false positives by 35% through ML models.",
          "Built <strong>network data collectors</strong> in Go, processing 1M+ NetFlow/sIPFIX events per second with <100ms latency.",
          "Created <strong>alert correlation engine</strong> using graph databases (Neo4j), identifying threat patterns across 100+ devices.",
          "Developed <strong>configuration backup system</strong> automating network device snapshots, reducing recovery time by 80%.",
          "Implemented <strong>role-based alert routing</strong> ensuring critical threats reached on-call engineers in <1 minute.",
          "Containerized services with <strong>Docker Swarm</strong>, achieving 99.95% uptime across 3 data centers.",
          "Set up <strong>log aggregation pipeline</strong> (ELK stack) processing 1TB+ daily logs for security forensics.",
          "Implemented <strong>infrastructure-as-code</strong> (Terraform) for multi-cloud deployments (AWS/GCP), reducing provisioning time by 90%.",
        ],
      },
    ],
    technologies: ["AWS Lambda", "S3", "DynamoDB", "Aurora PostgreSQL", "Airflow", "Datadog", "PgHero", "Terraform", "GraphQL", "SNS/SQS", "Angular", "Express.js", "React", "D3.js", "TimescaleDB", "Web Workers", "PDF/Excel", "Neo4j", "Docker Swarm", "ELK stack", "Go", "Python/Pandas", "Prometheus", "Grafana", "OpsGenie", "GuardDuty", "SecurityHub", "HIPAA", "SEC", "Terraform", "AWS", "GCP", "Azure", "Kubernetes", "Helm", "Docker", "CI/CD", "Jenkins", "GitHub Actions", "Grafana", "Datadog", "Sentry", "OpenTelemetry", "Chaos", "Load Testing", "Vegeta", "k6"],
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
      "description": "Architected a modular engine in Go and Node.js that unified rendering, physics, and networking layers across three flagship titles, boosting code-reuse by 70 % and lowering regressions by 40 % while sustaining 60 + FPS on mobile and console.",
      "thumbnail": "/scopely-engine.png",
      "skills": ["Go", "Node.js", "WebSocket", "Redis", "PostgreSQL", "Helm", "Kubernetes", "Istio", "Prometheus", "Grafana"],
      "link": null,
      "duration": "Jun 2023 – Feb 2024",
      "github": null
    },
    {
      "title": "Real-Time Matchmaking Microservices",
      "description": "Designed latency-aware matchmaking services with weighted-queue algorithms and Redis pub/sub, scaling to 10× concurrent players and delivering sub-50 ms pairing times during global live events.",
      "thumbnail": "/scopely-matchmaking.png",
      "skills": ["Go", "Redis", "WebSocket", "OpenTelemetry", "Kubernetes", "CI/CD", "Terraform", "AWS", "Grafana", "Jest"],
      "link": null,
      "duration": "Mar 2024 – Jun 2025",
      "github": null
    },
    {
      "title": "Telemetry Analytics Pipeline",
      "description": "Implemented Kafka-backed event ingestion with Prometheus exporters and time-series dashboards, increasing analytics throughput 4× and cutting incident MTTR by 60 %.",
      "thumbnail": "/scopely-telemetry.png",
      "skills": ["Kafka", "Prometheus", "Grafana", "PostgreSQL", "Kubernetes", "Helm", "Go", "OpenTelemetry", "AWS", "ArgoCD"],
      "link": null,
      "duration": "Jul 2024 – Jun 2025",
      "github": null
    },
    {
      "title": "Core Log-Routing Engine Redesign",
      "description": "Re-engineered the Go-based streaming core with lock-free data structures and back-pressure controls, tripling throughput and trimming CPU usage by 40 % on production clusters.",
      "thumbnail": "/cribl-routing.png",
      "skills": ["Go", "Kafka", "OpenTelemetry", "Prometheus", "Grafana", "AWS", "Jenkins", "GitHub Actions", "Kubernetes", "Vegeta"],
      "link": null,
      "duration": "Jun 2021 – Feb 2022",
      "github": null
    },
    {
      "title": "Real-Time Data Enrichment Service",
      "description": "Built a Redis-backed enrichment microservice that appended context to billions of log events per day with < 50 ms latency, enabling fine-grained routing and compliance filtering.",
      "thumbnail": "/cribl-enrichment.png",
      "skills": ["Redis", "Kafka", "Go", "ClickHouse", "Kubernetes", "CircleCI", "Grafana", "JSON Schema", "gRPC", "Docker"],
      "link": null,
      "duration": "Mar 2022 – Dec 2022",
      "github": null
    },
    {
      "title": "Data Replay & Log Reprocessing Platform",
      "description": "Delivered a Kafka-based replay engine with idempotent writes and schema-evolution support, achieving 99.9 % fidelity for backfilling analytics stores without downtime.",
      "thumbnail": "/cribl-replay.png",
      "skills": ["Kafka", "ClickHouse", "OpenTelemetry", "Jenkins", "Kubernetes", "Go", "gRPC", "Terraform", "AWS EKS", "Grafana"],
      "link": null,
      "duration": "Jan 2023 – May 2023",
      "github": null
    },
    {
      "title": "Cloud Snapshot Orchestration Platform",
      "description": "Designed a multi-cloud snapshot manager using DynamoDB and AWS Step Functions that cut backup windows by 50 % and handled petabyte-scale datasets with automated consistency checks.",
      "thumbnail": "/druva-snapshot.png",
      "skills": ["AWS Lambda", "DynamoDB", "Step Functions", "S3", "Aurora PostgreSQL", "Terraform", "Airflow", "Datadog", "Python", "Go"],
      "link": null,
      "duration": "Jun 2019 – Apr 2020",
      "github": null
    },
    {
      "title": "Serverless Backup Ingestion Microservices",
      "description": "Implemented event-driven Lambda pipelines triggered by S3 and SNS that processed 10× more backups with cold-start latencies reduced to 300 ms, improving RPO targets company-wide.",
      "thumbnail": "/druva-ingestion.png",
      "skills": ["AWS Lambda", "S3", "SNS", "Python", "Node.js", "CloudWatch", "CI/CD", "GraphQL", "Datadog", "Kinesis"],
      "link": null,
      "duration": "May 2020 – Jan 2021",
      "github": null
    },
    {
      "title": "Cost-Optimized Storage Tiering",
      "description": "Authored S3 lifecycle and intelligent-tiering policies with predictive access heuristics, saving 35 % in monthly storage spend while maintaining sub-second restore times for hot data.",
      "thumbnail": "/druva-tiering.png",
      "skills": ["S3 Intelligent-Tiering", "Terraform", "Airflow", "Python", "Datadog", "Athena", "Redshift", "AWS Glue", "Cost Explorer", "Boto3"],
      "link": null,
      "duration": "Feb 2021 – May 2021",
      "github": null
    },
    {
      "title": "AI Note Assist Clinical Documentation",
      "description": "Integrated TensorFlow-powered NLP service into EHR workflows, auto-populating 90 % of clinical notes and halving physician documentation time while maintaining HIPAA compliance.",
      "thumbnail": "/tebra-noteassist.png",
      "skills": ["TensorFlow", "Node.js", "Go", "Kubernetes", "PostgreSQL", "GraphQL", "AWS SES", "OAuth 2.0", "LaunchDarkly", "Prometheus"],
      "link": null,
      "duration": "Jan 2018 – Jun 2018",
      "github": null
    },
    {
      "title": "HIPAA-Compliant Claims Data Pipeline",
      "description": "Built a Go microservice interfacing with clearing-house APIs to validate and submit $50 M+ monthly claims with 99.9 % accuracy, featuring retry orchestration and audit logging.",
      "thumbnail": "/tebra-claims.png",
      "skills": ["Go", "Node.js", "DynamoDB", "Kafka", "Kubernetes", "AWS SQS", "PostgreSQL", "Datadog", "Terraform", "CI/CD"],
      "link": null,
      "duration": "Jul 2018 – Feb 2019",
      "github": null
    },
    {
      "title": "Kubernetes Migration of EHR Platform",
      "description": "Led migration of monolithic services to Kubernetes with Helm and ArgoCD, slashing deploy times from hours to minutes and enabling per-branch review apps for rapid QA.",
      "thumbnail": "/tebra-k8s.png",
      "skills": ["Kubernetes", "Helm", "ArgoCD", "Node.js", "Go", "CI/CD", "Grafana", "PostgreSQL", "AWS EKS", "LaunchDarkly"],
      "link": null,
      "duration": "Mar 2019 – May 2019",
      "github": null
    },
    {
      "title": "Distributed ML Pipeline for Industrial Sensors",
      "description": "Created a Kubeflow-based training pipeline processing 50 TB/month of sensor data with automatic drift detection, reducing retraining effort by 80 % and boosting model accuracy by 15 %.",
      "thumbnail": "/symphony-mlpipeline.png",
      "skills": ["Kubeflow", "TensorFlow", "Airflow", "Spark", "MLflow", "DVC", "Python", "gRPC", "Docker", "Kubernetes"],
      "link": null,
      "duration": "Jun 2014 – Oct 2015",
      "github": null
    },
    {
      "title": "Shelf Recognition Computer Vision System",
      "description": "Developed ONNX-optimized YOLOv2 models deployed on NVIDIA Jetson devices, improving shelf-stock detection precision by 20 % and enabling real-time inventory analytics for retail clients.",
      "thumbnail": "/symphony-cv.png",
      "skills": ["ONNX", "YOLOv2", "CUDA", "NVIDIA Jetson", "TensorRT", "gRPC", "Python", "OpenCV", "Edge AI", "Kubernetes"],
      "link": null,
      "duration": "Nov 2015 – Jun 2016",
      "github": null
    },
    {
      "title": "PPML Secure Inference Framework",
      "description": "Implemented privacy-preserving ML workflows using Intel SGX enclaves and remote attestation, enabling confidential inference for finance and manufacturing partners under strict compliance regimes.",
      "thumbnail": "/symphony-ppml.png",
      "skills": ["Intel SGX", "TensorFlow", "gRPC", "Go", "Kubeflow", "Airflow", "Python", "Encryption", "TLS", "CI/CD"],
      "link": null,
      "duration": "Jul 2016 – Dec 2016",
      "github": null
    }
  ]


export const skillCategories: SkillCategory[] = [
  {
    "name": "Frontend",
    "skills": [
      { "name": "React", "level": 5 },
      { "name": "Next.js", "level": 5 },
      { "name": "Tailwind CSS", "level": 5 },
      { "name": "Flutter / Dart", "level": 4 },
      { "name": "GraphQL Client (Apollo, URQL)", "level": 4 }
    ]
  },
  {
    "name": "Languages",
    "skills": [
      { "name": "Java / C++", "level": 5 },
      { "name": "TypeScript", "level": 5 },
      { "name": "JavaScript", "level": 5 },
      { "name": "Python", "level": 5 },
      { "name": "Go", "level": 4 }
    ]
  },
  {
    "name": "Backend & Frameworks",
    "skills": [
      { "name": "Node.js / Express", "level": 5 },
      { "name": "gRPC / REST / GraphQL", "level": 5 },
      { "name": "Kafka & Event Streaming", "level": 4 },
      { "name": "WebSocket / WebRTC", "level": 4 },
      { "name": "Gin / Fiber (Go)", "level": 4 }
    ]
  },
  {
    "name": "Cloud & DevOps",
    "skills": [
      { "name": "AWS / GCP / Azure", "level": 5 },
      { "name": "Kubernetes + Helm", "level": 5 },
      { "name": "Docker & Terraform", "level": 4 },
      { "name": "CI/CD (Jenkins, GitHub Actions)", "level": 4 },
      { "name": "ArgoCD / Spinnaker", "level": 3 }
    ]
  },
  {
    "name": "Datastores & Caching",
    "skills": [
      { "name": "PostgreSQL / PL-pgSQL", "level": 5 },
      { "name": "Redis / DynamoDB", "level": 4 },
      { "name": "MongoDB / MySQL", "level": 4 },
      { "name": "Cassandra / Elasticsearch", "level": 3 },
      { "name": "Neo4j (Graph DB)", "level": 3 }
    ]
  },
  {
    "name": "ML & Data Processing",
    "skills": [
      { "name": "TensorFlow / PyTorch", "level": 5 },
      { "name": "Kubeflow / MLflow", "level": 4 },
      { "name": "Spark & Big-Data ETL", "level": 3 },
      { "name": "Airflow / DVC", "level": 3 },
      { "name": "Scikit-learn", "level": 3 }
    ]
  },
  {
    "name": "Monitoring & Observability",
    "skills": [
      { "name": "Prometheus & Grafana", "level": 5 },
      { "name": "Datadog / Sentry", "level": 4 },
      { "name": "OpenTelemetry", "level": 4 },
      { "name": "Chaos / Load Testing (Vegeta, k6)", "level": 3 }
    ]
  }
];


export const languages: Language[] = [
  { name: "English", proficiency: LanguageProficiency.Fluent, level: 5 },
  { name: "Spanish", proficiency: LanguageProficiency.Native, level: 5 },
]
