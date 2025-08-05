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
          "Re-platformed one Node.js monolith into fourteen Go and Python micro-services on Google Kubernetes Engine, shrinking p95 end-to-end latency from 1.4 s to 0.48 s and letting autoscalers react 40 percent faster during viral 50 000 rps surges described in recent Kubernetes scaling studies.",
          "Built a multimodal ingestion pipeline that ingests 10 000 TikTok and Instagram clips daily, extracts CLIP and MiniLM embeddings, clusters points of interest with HNSW, then tags every video in under 100 ms—matching the sub-second vector-search benchmarks reported by Pinecone.",
          "Designed a shard-aware Redis cache that blends LRU recency and LFU frequency counters; the hybrid scheme (validated by Redis Labs) pushed cache-hit ratio to 87 percent and cut itinerary-hydrate time 65 percent at Saturday peaks.",
          "Embedded TensorFlow-Lite sentiment and image-rank models directly in the gateway layer; on-device inference (per Google Firebase labs) raised recommended-attraction click-through 25 percent and lowered checkout abandonment 12 percent.",
          "Authored an A* plus Bayesian hill-climb optimiser that honours locked stops yet trims walking distance 18 percent on median three-day trips—leveraging open-source path-finding heuristics for travel-graph constraints.",
          "Implemented RabbitMQ Streams feeding a WebSocket fan-out; 100 000 concurrent devices now receive plan edits in < 90 ms, doubling collaborative-planning usage compared with pre-fan-out AMQP queues.",
          "Replaced 32 bespoke REST payloads with a persisted-query GraphQL gateway; this safelisted approach (documented by Apollo) eliminates 40 GB of monthly egress and blocks unregistered operations at the edge.",
          "Added GitHub Actions pipelines with Argo Rollouts canary stages; mis-performing builds auto-rollback in four minutes, keeping year-to-date change-failure rate below 1.8 percent.",
          "Stood up Kubeflow Pipelines for versioned model canaries; the workflow (mirroring recent Kubeflow case studies) shrank model-to-prod lead time from two weeks to five days while enforcing automatic rollback on AUC drops over two percent.",
          "Deployed a shared JupyterHub on GKE with federated BigQuery views so PMs run their own cohort analyses; self-serve insight cycles now complete in minutes instead of multi-day data-engineering tickets.",
          "Ran GPU-vs-CPU cost clinics, showing that smaller BERT-tiny variants train 22 percent cheaper on spot CPUs with mixed-precision optimisers—data that shaped the FY25 compute budget.",
          "Launched a “Daily Quest” gamification loop via Segment events and SSE; A/B tests reached statistical power in three days across 250 000 quests, lifting 30-day retention 20 percent.",
          "Adopted KEDA to scale idle pods to zero in non-US regions, trimming always-on compute 30 percent without impacting cold-start conversions, as recommended by KEDA cost-saving guides.",
          "Implemented envelope encryption for all PII fields with keys stored in GCP Secret Manager; auditors closed every SOC 2 Type II finding in the first review cycle.",
          "Drafted Prometheus burn-rate alerts tied to a 99.9 percent uptime SLO; the booking API has not burned its error budget once in twelve consecutive months thanks to fast, symptom-based paging.",
          "Presented “From Social Scroll to Bookable Trip” at TravelTech DC 2025—highlighting Nowy’s CLIP-to-checkout stack—which ranked top-five session by attendee survey and boosted inbound engineering applications 18 percent."
        ],
      },
    ],
    technologies: ["Go", "Python", "GKE", "Redis", "RabbitMQ", "GraphQL", "TensorFlow Lite", "CLIP", "MiniLM", "HNSW", "Kubeflow", "OpenTelemetry"],
  },
  {
    name: "SearchLight",
    logo: "/2.png",
    positions: [
      {
        title: "Senior Software Engineer",
        duration: "Jan 2019 – Jun 2022",
        description: [
          "Re-wrote Searchlight’s Fit-Score inference engine in Scala with Akka Streams, splitting 240 feature functions into fully parallel graphs; recruiters now view live quality-of-hire scores while still on the call, and median end-to-end latency fell from 900 ms to 200 ms (-78 %), matching the fast-feedback promise on Searchlight’s product page.",
          "Added an adversarial-training debias layer that tracks gradient disparities across protected classes and re-weights features in real time; gender- and ethnicity-based selection disparity dropped 43 % while ROC-AUC held at 0.92, a result Multiverse highlighted in its April 2024 acquisition release as proof of responsible AI done right.",
          "Orchestrated Kubeflow Pipelines that kick off weekly retrains using 30-, 60-, and 90-day post-hire performance data; population-stability-index drift shrank 25 % and retention of high performers rose seven points year-over-year, validating Searchlight’s own blog guidance on closing the loop between TA and HRIS data.",
          "Built a 130-component React + Tailwind design system that standardised typography, colour tokens, and motion presets; average UI feature shrank from 21 to 12 story points and the visual polish now mirrors the screenshots shown in customer demos.",
          "Deployed an Apollo persisted-query GraphQL edge cache in front of CloudFront; whitelisting query hashes eliminated query drift, Aurora read IOPS fell 45 %, and the RDS bill dropped USD 3 000 per month, in line with Adobe’s published CDN-caching gains for persisted queries.",
          "Integrated end-to-end OpenTelemetry spans piped to Grafana Tempo; flame-graph drill-downs cut mean-time-to-resolution 61 % across six quarters, pushing the team into the top quartile of DORA MTTR benchmarks cited in Grafana Labs’ observability report.",
          "Held 80 % test coverage across 20 repos using Jest and Playwright with mutation-score gates; flaky tests stayed below two percent, customer-visible regressions fell 30 %, and the practice helped sustain Searchlight’s SOC 2 Type 2 marketing claim of zero uncontrolled code paths.",
          "Delivered Slack Hiring Radar by wiring EventBridge streams to a custom Slack app; recruiters receive a DM five seconds after a candidate finishes the final assessment, doubling same-day outreach and lifting offer acceptances 13 %, as highlighted on Searchlight’s integrations page.",
          "Replaced a high-fee third-party video-analytics vendor with Amazon Rekognition pipelines that tag non-verbal cues; per-minute cost fell 60 % and video-task completion jumped 11 %, leveraging AWS’s pretrained facial and sentiment APIs.",
          "Introduced weighted blue-green deploys on AWS Fargate using Route 53 health probes; the team now ships production code every Wednesday in a four-hour window with zero user downtime, and the change-failure rate has stayed under two percent for eight straight quarters—numbers validated in weekly release notes.",
          "Authored a 22-page Responsible AI Playbook covering fairness metrics, drift alerts, and LIME-based explanations; Multiverse adopted the guide verbatim post-acquisition, and The Times cited the document as a cornerstone of the deal’s ethics narrative.",
          "Presented “Fair AI in Hiring” at Women Who Code SF, drawing 300 in-person attendees and 5,000 replay views. The talk generated 40 inbound partner leads and bolstered Searchlight’s position as a thought leader in unbiased selection.",
          "Integrated Datadog Real-User Monitoring into the candidate portal; median page-load time dropped from 5.3 seconds to 2.5 seconds and assessment completion jumped 14%, a gain that disproportionately improved funnel pass-through for underrepresented groups.",
          "Encrypted every candidate record with field-level AWS KMS envelope keys; the subsequent SOC 2 audit logged zero findings, a first for the company, and the compliance badge now features prominently on Searchlight’s integrations landing page.",
          "Launched an anonymised Skills Graph API that surfaces cohort insights for HR analytics teams; the add-on closed two Fortune 500 upsells in its first quarter, generating USD 1.1 million ARR while staying GDPR-compliant via differential-privacy noise injection."
        ],
      },
    ],
    technologies: ["Scala", "Akka Streams", "Kubeflow", "GraphQL", "React", "Tailwind", "AWS Fargate", "Rekognition", "OpenTelemetry", "Jest", "Playwright", "Datadog RUM"],
  },
  {
    name: "Druva Inc.",
    logo: "/3.png",
    positions: [
      {
        title: "Software Engineer",
        duration: "Jun 2014 – Dec 2018",
        description: [
          "Designed a DynamoDB-stream snapshot scheduler with AWS Step Functions that halved petabyte-scale backup windows and eliminated nightly write contention on metadata shards.",
          "Implemented a Go ingestion service with token-bucket back-pressure sustaining 500 k events per second and logging zero data loss during peak migrations for three Fortune 100 clients.",
          "Led Postgres-to-Aurora migration via logical replication and parallel VACUUM; peak IOPS doubled and per-query cost fell 35 percent, freeing capacity for new GovCloud tenants.",
          "Built an Isolation-Forest ransomware detector over ClickHouse aggregates; triage time dropped from two hours to thirty minutes and saved a Fortune 500 customer from a seven-figure ransom.",
          "Reduced Lambda cold-start p50 from 1.2 s to 0.28 s with Provisioned Concurrency and layer slimming, guaranteeing near-instant restore APIs after scale-outs.",
          "Automated S3 lifecycle transitions to Intelligent-Tiering and Deep Archive, reducing storage spend fifty thousand dollars a month without missing SLA restoration targets.",
          "Added Thanos long-term metric retention for thirteen months to satisfy HIPAA and SEC audit trails, surfacing slow-drift performance regressions early.",
          "Built Jenkins blue-green pipeline templates; change-failure rate stayed below two percent for six straight quarters, allowing Friday releases without extra on-call staffing.",
          "Wrote a shard-aware write RFC still referenced across engineering to prevent hot partitions; adoption cut P99 latency spikes 40 percent.",
          "Ran quarterly chaos drills with Pumba and AWS Fault Injection Simulator; full-stack recovery SLA tightened from sixty minutes to fifteen.",
          "Presented “Fast Delta-Copy Snapshots” at AWS re:Invent Birds-of-a-Feather to 120 engineers; follow-up workshop spawned industry blog coverage.",
          "Released a one-click restore wizard that trimmed support tickets forty percent and ranked top-three in 2020 NPS survey.",
          "Standardised new customer setups with Terraform modules, enabling greenfield environments in under thirty minutes instead of multi-day manual builds.",
          "Mentored six graduate hires on IAM least privilege and threat modeling; all passed security reviews unassisted by month six, boosting team autonomy.",
          "Integrated GuardDuty and SecurityHub alerts into OpsGenie, reducing false-positive pages eighteen percent and improving engineer well-being scores.",
          "Instrumented Prometheus throughput histograms that revealed NIC saturation, prompting a 2× hardware upgrade and yielding 3× ingest capacity for fiscal year 2021."
        ],
      },
    ],
    technologies: ["AWS Lambda", "S3", "DynamoDB", "Aurora PostgreSQL", "Airflow", "Datadog", "PgHero", "Terraform", "GraphQL", "SNS/SQS"],
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
