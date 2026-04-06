import React from 'react';
import VerticalNav from './VerticalNav';
import './Aisiem.css';

const Aisiem = () => {
  return (
    <>
      <VerticalNav />
      <div className="aisiem-hero">
        <h1 className="aisiem-hero-title">AI-SIEM: Observability for Enterprise AI Systems</h1>
      </div>
      <div className="aisiem-main-content">
        <div className="aisiem-section">
          <div className="aisiem-header">
            <h2 className="aisiem-role">Capstone Project</h2>
            <p className="aisiem-tech">
               Python • FastAPI • Docker • Splunk • OpenTelemetry
            </p>
          </div>
          
          <div className="aisiem-content">
            <section className="aisiem-text-section">
              <h3>Overview</h3>
              <p>
                For my capstone project, our team designed and prototyped an AI-SIEM platform that helps organizations safely deploy large language model (LLM) applications.
              </p>
              <p>
                The system combines a customer-facing AI chatbot with an observability layer that monitors prompts, responses, and system behavior. Telemetry from the AI pipeline is exported to Splunk dashboards, allowing teams to detect issues such as hallucinations, unsafe outputs, and abnormal usage patterns.
              </p>
              <p><strong>Key components of the system include:</strong></p>
              <ul>
                <li>BeeAI chatbot framework</li>
                <li>Retrieval-Augmented Generation (RAG) with a vector database</li>
                <li>AI guardrails for prompt and response monitoring</li>
                <li>OpenTelemetry for telemetry collection</li>
                <li>Splunk dashboards for observability and alerts</li>
              </ul>
              <p>
                The goal of the project is to demonstrate how AI systems can be deployed with security, monitoring, and accountability built into the architecture.
              </p>
            </section>

            <section className="aisiem-text-section">
              <h3>The Problem</h3>
              <p>
                Organizations are rapidly adopting LLM-powered applications, but these systems introduce risks that traditional monitoring tools cannot detect. Examples include:
              </p>
              <ul>
                <li>Hallucinated responses</li>
                <li>Prompt injection attacks</li>
                <li>Biased or unsafe outputs</li>
                <li>Compliance violations</li>
                <li>Uncontrolled token usage</li>
              </ul>
              <p>
                Most observability platforms monitor infrastructure logs, not AI behavior. Our project explores how to treat AI systems as a security and observability surface that needs dedicated monitoring.
              </p>
            </section>

            <section className="aisiem-text-section">
              <h3>Project Goals</h3>
              <p>Our MVP focused on:</p>
              <ul>
                <li>Building a working AI chatbot with RAG</li>
                <li>Designing an AI-SIEM monitoring architecture</li>
                <li>Implementing guardrails before and after LLM responses</li>
                <li>Collecting telemetry using OpenTelemetry</li>
                <li>Visualizing AI behavior using Splunk dashboards</li>
              </ul>
            </section>

            <section className="aisiem-text-section">
              <h3>System Architecture</h3>
              <p>Each user interaction moves through a monitored pipeline:</p>
              <ol>
                <li>User submits a prompt</li>
                <li>Pre-LLM guardrails check for prompt injection or unsafe content</li>
                <li>RAG retrieval pulls relevant documents from the vector database</li>
                <li>LLM generates a response</li>
                <li>Post-LLM analysis checks outputs for hallucinations or policy violations</li>
                <li>Telemetry is exported to Splunk for monitoring and analysis</li>
              </ol>
              <p>
                This architecture enables teams to observe both system performance and AI behavior in real time.
              </p>
            </section>

            <section className="aisiem-text-section">
              <h3>Team Process</h3>
              <p>Our team worked iteratively across the capstone sequence.</p>
              <div className="process-timeline">
                <div className="timeline-item">
                  <h4>❄️ Winter Quarter</h4>
                  <ul>
                    <li>Defined product concept and AI-SIEM vision</li>
                    <li>Conducted market and competitor research</li>
                    <li>Designed system architecture and MVP scope</li>
                  </ul>
                </div>
                <div className="timeline-item">
                  <h4>🌸 Spring Quarter</h4>
                  <ul>
                    <li>Implemented the prototype architecture</li>
                    <li>Deployed cloud infrastructure and containers</li>
                    <li>Integrated telemetry pipelines with OpenTelemetry</li>
                    <li>Built initial Splunk dashboards for monitoring</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="aisiem-text-section">
              <h3>My Contributions</h3>
              <p>My work focused on backend architecture and AI observability integration. Key contributions:</p>
              <ul>
                <li>Designed the system architecture connecting the chatbot pipeline and monitoring layer</li>
                <li>Implemented the FastAPI backend for the chatbot service</li>
                <li>Integrated BeeAI, RAG retrieval, and the LLM API</li>
                <li>Instrumented telemetry using OpenTelemetry</li>
                <li>Configured Splunk ingestion and monitoring dashboards</li>
                <li>Helped deploy services using Docker on cloud VMs</li>
              </ul>
              <p>
                Through this work, I gained experience building production-oriented AI systems with monitoring and observability.
              </p>
            </section>

            <section className="aisiem-text-section">
              <h3>Key Takeaways</h3>
              <ul>
                <li><strong>AI systems require new monitoring approaches</strong> beyond traditional logs.</li>
                <li><strong>Observability should be designed into the architecture</strong>, not added later.</li>
                <li><strong>LLM systems behave more like probabilistic services</strong>, making guardrails and monitoring critical.</li>
              </ul>
            </section>

            <section className="aisiem-text-section">
              <h3>Next Steps</h3>
              <p>Future improvements to the platform could include:</p>
              <ul>
                <li>More advanced hallucination detection</li>
                <li>Multi-tenant SaaS architecture</li>
                <li>Support for additional LLM providers</li>
                <li>Kubernetes deployment for scalability</li>
                <li>Real-world pilot testing with organizations</li>
              </ul>
            </section>

            <section className="aisiem-text-section notice-section">
              <h3>🚧 After Capstone Completion</h3>
              <p><em>(Required by assignment)</em></p>
              <p>Once the project is complete, I will update this portfolio page by:</p>
              <ul>
                <li>Adding final Splunk dashboard screenshots</li>
                <li>Including a detailed architecture diagram</li>
                <li>Showing a live chatbot interaction example</li>
                <li>Documenting the final deployment architecture</li>
                <li>Adding system evaluation results</li>
                <li>Linking the GitHub repository and demo materials</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aisiem;
