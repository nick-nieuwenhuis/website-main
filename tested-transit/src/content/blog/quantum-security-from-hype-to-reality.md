---
title: "Quantum Security: From Hype to Reality"
description: "Why organizations should start preparing for the security implications of quantum computing today."
pubDate: 2026-10-25
language: en
tags:
  - Quantum Security
  - Cybersecurity
  - Security Architecture
  - Cyber Risk
draft: false
---
Developments in quantum technology, including quantum computing, quantum communication and quantum sensing, are moving steadily from research towards strategic relevance. What was once predominantly the domain of scientists and long-term technology forecasting is increasingly becoming a subject for security professionals, policymakers and organizational leaders. This shift is also visible at government level. The recently published Dutch Governmentwide Quantum Strategy (*Rijksbrede Quantumstrategie*) identifies quantum technology as a key enabling technology of strategic importance and explicitly connects its development to economic competitiveness, national security, strategic autonomy and resilience. The Dutch government's ambition is to be a technological leader in quantum technology by 2035, while being strategically autonomous and resilient.

From a cybersecurity perspective, the urgency is becoming increasingly tangible. The strategy recognizes that future quantum computers will eventually be capable of breaking current asymmetric cryptography and explicitly states that we need to prepare for this now. It also highlights risks to information and essential infrastructure and the need to protect systems, data and infrastructure against the security implications of quantum technology. But quantum security is about more than replacing today's cryptographic algorithms. Quantum technologies introduce broader questions around security architecture, cyber risk, digital sovereignty and strategic dependencies. At the same time, quantum computing, communication and sensing may themselves introduce new capabilities and opportunities. Preparing for the quantum era therefore requires organizations to look beyond post-quantum cryptography alone. That is the central argument of this article: **Quantum security is moving from hype towards a strategic security reality, and organizations should start understanding their exposure today.**

## What is quantum computing again?

The power of quantum computing lies in principles of quantum mechanics such as superposition and entanglement. Classical computers operate using bits that represent either a 0 or a 1. Quantum computers use quantum bits, or qubits. Through superposition, these qubits can exist in a combination of states until they are measured. Combined with quantum algorithms, these properties enable quantum computers to approach certain computational problems fundamentally differently from classical computers.

A simple analogy is solving a maze. A classical approach would explore possible routes until it finds the exit. Quantum computing can use fundamentally different computational approaches to certain problems, potentially making calculations feasible that would require enormous amounts of time on classical systems. Entanglement adds another important property. Qubits can become correlated in ways that have no classical equivalent. It is the combination of these quantum-mechanical properties with purpose-built algorithms that creates the potential of quantum computing. Importantly, this does not mean that quantum computers will simply become much faster replacements for today's computers. Their potential lies primarily in solving particular classes of complex problems for which quantum-mechanical computation offers an advantage. The Governmentwide Quantum Strategy consequently considers quantum technology more broadly than computing alone.  It distinguishes three major domains: **quantum computing, quantum communication and quantum sensing**.

## From research towards security relevance

The development of quantum technology is no longer happening independently from cybersecurity. One of the most important security implications concerns cryptography. A sufficiently powerful cryptographically relevant quantum computer could undermine asymmetric cryptographic algorithms used throughout our digital infrastructure. Cryptography is not some isolated cybersecurity component hidden deep inside our infrastructure. It underpins digital identities, authentication, signatures, software updates, confidential communication and the mechanisms through which systems establish trust. This is why the quantum threat is fundamentally an **architecture problem**.

The Dutch Governmentwide Quantum Strategy describes cryptography as a fundamental building block for IT and OT infrastructures and connects it to confidentiality, integrity, authenticity and non-repudiation. It also explicitly identifies the *harvest now, decrypt later* risk: adversaries can collect encrypted information today with the intention of decrypting it once sufficiently capable quantum computers become available. This creates an interesting security problem. **The threat does not have to exist today for the risk to exist today.** Information that must remain confidential for many years may already require protection against capabilities that do not yet exist.

## Post-quantum cryptography is coming, but migration is the challenge

Post-quantum cryptography (PQC) is designed to provide cryptographic mechanisms resistant to attacks from both conventional and cryptographically relevant quantum computers. Unlike approaches requiring quantum infrastructure, PQC can operate on conventional computing infrastructure. This makes PQC a critical part of preparing for the quantum threat. But there is an important distinction between having quantum-resistant algorithms and actually making an organization quantum-safe. **Migration is the difficult part.**

Organizations have accumulated cryptography throughout decades of digital transformation. It exists in network protocols, applications, APIs, certificates, identities, software libraries, devices, firmware, cloud services, operational technology and countless dependencies on suppliers. The Dutch Governmentwide Quantum Strategy makes this organizational challenge explicit. It describes migration towards PQC as not merely a technical exercise, but one requiring changes to **processes, knowledge and the organization itself**. It refers to the Dutch PQC migration handbook, which indicates that migration for a government organization may take at least eight years because the necessary organizational and technical prerequisites must first be established. That changes the discussion considerably. **If migration takes years, waiting until a cryptographically relevant quantum computer exists is not a viable strategy.**

## Digital sovereignty in the quantum era

Quantum technology introduces another question that receives less attention in cybersecurity discussions: **who controls the infrastructure?** Quantum computers are highly specialized physical systems requiring tightly controlled environments. Much like high-performance computing infrastructure, users will commonly interact with these systems remotely rather than placing a quantum computer in their own datacenter. Cloud infrastructure therefore becomes an important part of the quantum ecosystem. This raises essentially the same questions organizations are already facing around cloud computing, artificial intelligence and digital sovereignty, but with potentially even greater strategic implications. Where is the technology located? Who controls access? Which jurisdiction applies? What happens to algorithms, intellectual property and data processed by these systems? And how easily can workloads move from one quantum platform to another?

My original article highlighted the European dependency question specifically in relation to access to quantum infrastructure and the dominant position of American hyperscalers such as Microsoft Azure, AWS and Google Cloud. At the same time, Europe and the Netherlands have developed significant research capabilities through organizations such as QuTech, Quantum Delta NL and QuSoft, alongside European quantum companies. The Governmentwide Quantum Strategy places this question in a broader geopolitical context. It explicitly states that building a completely independent and closed Dutch quantum value chain would be practically impossible because the Netherlands depends on international supplies of hardware, advanced components, critical raw materials, knowledge and expertise. Instead, it focuses on securing strategic positions within international value chains while strengthening European strategic autonomy. That distinction is important.

**Digital sovereignty does not necessarily mean technological self-sufficiency.**

From an architecture perspective, it is much more useful to understand critical dependencies, determine which ones are acceptable, identify areas where strategic control matters and prevent dependencies from becoming irreversible lock-in.

## Quantum security is more than cryptography

This brings us to what I believe is the most important point. Quantum security is frequently reduced to one question:
> How do we migrate to post-quantum cryptography?

That is an important question, but it is too narrow. Organizations should consider quantum from two perspectives. First, organizations need to become resilient against the threats introduced by quantum technologies. The transition towards quantum-resistant cryptography is the clearest example. Second, organizations may eventually want to **use quantum technologies themselves**. 

The Governmentwide Quantum Strategy illustrates this broader perspective particularly well. It looks beyond quantum computing and cryptography towards quantum communication and sensing, opportunities in areas such as healthcare, energy and infrastructure, and potential implications for national security and public values. This means quantum technology eventually becomes part of enterprise and security architecture discussions in much the same way that cloud, AI and other emerging technologies already are. Security architects therefore need to consider not only how to protect existing architectures from future quantum threats, but eventually how quantum capabilities fit into future architectures. That requires questions such as:

- Where could quantum technology provide meaningful organizational value?
- Which business processes could eventually depend on quantum capabilities?
- Which information requires long-term confidentiality?
- Where is quantum-vulnerable cryptography currently used?
- Which suppliers and platforms create quantum-related dependencies?
- How easily can cryptographic mechanisms be replaced?
- How should future quantum services fit within security and risk architectures?

The point is not that every organization needs a quantum computer. The point is that organizations need sufficient understanding of their architecture and risk exposure to make those decisions deliberately.

## Start with risk, not technology

For most organizations, the first useful step is therefore not purchasing quantum technology. It is **understanding the risk**. Start by identifying information and systems that have a long confidentiality lifetime. Then determine where the cryptographic mechanisms protecting that information are located. That includes more than databases containing sensitive information. Cryptography may be embedded throughout application architectures, integrations, certificates, authentication mechanisms, infrastructure, software components and supplier services. 

Particular attention should be given to systems with long operational lifetimes. The Governmentwide Quantum Strategy specifically highlights weapons systems, infrastructure and medical equipment as examples of systems that can be particularly vulnerable because they cannot easily or rapidly migrate towards quantum-safe standards. Next, consider *harvest now, decrypt later*. The question is not simply: Could someone break this encryption today? Instead ask: **Would this information still cause harm if someone gained access to it years from now?** If the answer is yes, the quantum risk may already be relevant.

## Cryptographic agility matters

There is another architectural lesson here that goes beyond quantum computing. We should design systems in such a way that cryptographic mechanisms can evolve. Algorithms change. Standards change. Vulnerabilities are discovered. Regulatory requirements evolve. Quantum computing simply makes this architectural weakness much more visible. Hardcoding cryptographic assumptions deep inside applications and infrastructure makes every future migration harder. Organizations should therefore increasingly think in terms of **cryptographic agility**: the ability to discover where cryptography is used and replace cryptographic mechanisms without redesigning entire systems. Seen this way, quantum readiness is not merely preparation for one hypothetical future threat. It is also an opportunity to improve the maintainability and resilience of today's security architecture.

## From hype to reality

Quantum computing is still developing, and uncertainty remains about exactly when cryptographically relevant quantum computers will become available. But uncertainty about timing should not be confused with uncertainty about the need to prepare. The Dutch Governmentwide Quantum Strategy now explicitly calls for preparations against the quantum threat and places the transition towards quantum-safe cryptography within a broader strategy around technological leadership, national security, strategic autonomy and resilience. That reinforces the central message of my original article. Organizations do not need to panic. They also should not wait for Q-day.

Start by understanding the architecture. Identify long-lived sensitive information. Map cryptographic dependencies. Assess suppliers. Incorporate quantum into cyber risk management. Build knowledge internally. And create the architectural flexibility required to move towards quantum-safe technologies when necessary. Because ultimately, **quantum security is not about predicting the exact date on which quantum computers become powerful enough to threaten today's cryptography.** It is about making sure your organization is able to adapt when they do.

---
### Author's note

*This article is an updated and expanded English adaptation of my article "Quantum Security: van hype naar realiteit", originally published in 2025. This version incorporates developments and policy direction from the Dutch Governmentwide Quantum Strategy published in 2026.