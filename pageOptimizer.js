// HeaderFooterManager.js

  class SpecialFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <br><br>
      <div class="bottom-nav">
        <div>
          <p style="color:gray;">Last Update: 2025-12-17 </p>
        </div>
      </div>
      `
    }
  }

  class MLResearchPapers extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ul class="wp-block-list">
        <li>Arpad Huszak, Takaito Yoshizawa, Alireza Aghabagherloo, Dave Singelée &amp; Bart Preneel (2025). <strong>“On Performance Improvement of Reinforcement Learning for Collision Avoidance in Autonomous Intersections”</strong> In <em>IEEE Access</em>, Vol. 13, pp. 189225-189241, doi:<a href="https://doi.org/10.1109/ACCESS.2025.3626936">10.1109/ACCESS.2025.3626936</a>, 2025.</li>
        <li>Takaito Yoshizawa, Alireza Aghabagherloo, Arpad Huszak, Csongor Ujvarosi, Dave Singelée &amp; Bart Preneel (2024). <strong>“Security-Focused Training Model of Reinforcement Learning in Autonomous Vehicles”</strong> In <em>IEEE Vehicular Networking Conference</em>, pp. 215-218, doi:<a href="https://doi.org/10.1109/VNC61989.2024.10575985">10.1109/VNC61989.2024.10575985</a>, 2024.</li>
      </ul>
      `
    }
  }

  class V2XResearchPapers extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ul class="wp-block-list">
        <li>Takahito Yoshizawa, <strong>“Security and Privacy of ITS Standards and Their Research Challenges”</strong> A book chapter in <em>Connected, Cooperative and Autonomous Mobility - Research Needs, Challenges and Future Perspectives</em>, IntechOpen, 2026 (to be published).</li>
        <li>Takahito Yoshizawa,  &amp; Bart Preneel, <strong>“Intersections Are Not Good for Your Privacy”</strong> In <em>IEEE International Conference on Wireless and Mobile Computing, Networking and Communications (WIMOB 2024)</em>, pp. 166-171, doi:<a href="https://doi.org/10.1109/WiMob61911.2024.10770318">10.1109/WiMob61911.2024.10770318</a>, 2024.</li>
        <li>Takahito Yoshizawa, An Braeken &amp; Bart Preneel, <strong>“Toward Viable Security Solution for VRUs in V2X Communication”</strong> In <em>IEEE Vehicular Networking Conference</em>, pp. 33-40, doi:<a href="https://doi.org/10.1109/VNC61989.2024.10576015">10.1109/VNC61989.2024.10576015</a>, 2024.</li>
        <li>Dimah Almani, Tim Muller, Xavier Carpent, Takahito Yoshizawa &amp; Steve Furnell, <strong>“Enabling Vehicle-to-Vehicle Trust in Rural Areas: An Evaluation of a Pre-Signature Scheme for Infrastructure-Limited Environments”</strong> In <em>Future Internet 16(3)</em>, 25 pages, doi:<a href="https://doi.org/10.3390/fi16030077">10.3390/fi16030077</a>, 2024.</li>
        <li>D. Balenson, C. Bösch, K. Han, M. Hoffmann, S. Pape, N. Trkulja, &amp; Takahito Yoshizawa, <strong>“Automotive Privacy Engineering”</strong> In <em>Sec.4.3 of Privacy Protection of Automated and Self-Driving Vehicles (Dagstuhl Seminar 23242)</em>, 41 pages, doi:<a href="https://doi.org/10.4230/DagRep.13.6.22">10.4230/DagRep.13.6.22</a>, 2024.</li>
        <li>Takahito Yoshizawa, An Braeken &amp; Bart Preneel, <strong>“Open Questions in VRU Standards from Security and Privacy Perspectives”</strong> In <em>IEEE Conference on Standards for Communications and Networking</em>, pp. 278-283, doi:<a href="https://doi.org/10.1109/CSCN60443.2023.10453165">10.1109/CSCN60443.2023.10453165</a>, 2023.</li>
        <li>Dimah Almani, Tim Muller, Xavier Carpent, Steve Furnell, &amp; Takahito Yoshizawa, <strong>“Pre-Signature Scheme for Trustworthy Offline V2V Communication”</strong> In <em>Proceedings of the IFIP Information and Communication Technology, Lecture Notes in Computer Science, Springer-Verlag</em>, 16 pages, 2023.</li>
        <li>Takahito Yoshizawa, &amp; Bart Preneel, <strong>“Post-Quantum Impacts on V2X Certificates – Already at The End of The Road”</strong> In <em>IEEE Vehicular Technology Conference</em>, 6 pages, doi:<a href="https://doi.org/10.1109/VTC2023-Spring57618.2023.10199793">10.1109/VTC2023-Spring57618.2023.10199793</a>, 2023.</li>
        <li>Takahito Yoshizawa, &amp; Bart Preneel, <strong>“A New Approach To Pseudonym Certificate Management in V2X Communication”</strong> In <em>IEEE Vehicular Networking Conference</em>, pp. 25-32, doi:<a href="https://doi.org/10.1109/VNC57357.2023.10136349">10.1109/VNC57357.2023.10136349</a>, 2023.</li>
        <li>Takahito Yoshizawa, Dave Singelée, Jan Tobias Muehlberg, Stephane DELBRUEL, Daniel HUGHES, A. TAHERKORDI, &amp; Bart Preneel, <strong>“A Survey of Security and Privacy Issues in V2X Communication Systems”</strong> In <em>ACM Computing Surveys 55(9)</em>, pp. 1-36, doi:<a href="https://doi.org/10.1145/3558052">10.1145/3558052</a>, 2023.</li>
        <li>Takahito Yoshizawa, Dave Singelée, Jan Tobias Muehlberg, Stephane DELBRUEL, Daniel HUGHES, A. TAHERKORDI, &amp; Bart Preneel, <strong>“A Survey of Security and Privacy Issues in V2X Communication Systems (Extended version)”</strong> In <em>ArXiv.org</em>, 36 pages, <a href="https://arxiv.org/abs/2208.14674">arxiv.org</a>, 2023.</li>
        <li>Takahito Yoshizawa, &amp; Bart Preneel, <strong>“Misbehaviour Reporting in ETSI ITS Standard Considered Broken”</strong> In <em>IEEE Conference on Standards for Communications and Networking</em>, 7 pages, doi:<a href="https://doi.org/10.1109/CSCN57023.2022.10050926">10.1109/CSCN57023.2022.10050926</a>, 2022.</li>
        <li>Takahito Yoshizawa, &amp; Bart Preneel, <strong>“On Handling of Certificate Digest in V2X Communication”</strong> In <em>IEEE International Conference on Wireless and Mobile Computing, Networking and Communications (WIMOB 2022)</em>, 6 pages, doi:<a href="https://doi.org/10.1109/WiMob55322.2022.9941683">10.1109/WiMob55322.2022.9941683</a>, 2022.</li>
        <li>Takahito Yoshizawa, Dave Singelée &amp; Bart Preneel, <strong>“A New Privacy Enhancing Beacon Scheme in V2X Communication”</strong> In <em>Data Privacy Management, Autonomous Spontaneous Security, and Security Assurance, Lecture Notes in Computer Science</em>, Springer-Verlag, 12 pages, doi:<a href="https://doi.org/10.1007/978-3-030-93944-1_9">10.1007/978-3-030-93944-1_9</a>, 2021.</li>
        <li>Takahito Yoshizawa, &amp; Bart Preneel, <strong>“Survey of Security Aspects of V2X Standards and Related Issues”</strong> In <em>IEEE Conference on Standards for Communications and Networking, J. Lopez-Soler and T. Taleb (Eds.)</em>, 5 pages, doi:<a href="https://doi.org/10.1109/CSCN.2019.8931311">10.1145/3190619.3190640</a>, 2019.</li>
      </ul>
      `
    }
  }

  class OtherResearchPapers extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ul class="wp-block-list">
        <li>Takahito Yoshizawa, Sheeba Backia Mary Baskaran, &amp Xiaoting Huang <strong>“5G Authentication Mechanisms”</strong> A book chapter in <em>5G Networks and Cybersecurity</em>, River Publisher, 2025</li>
        <li>Sayon Duttagupta, Dave Singelée, Xavier Carpent, Volkan Guler, Takahito Yoshizawa, Seyed Farhad Aghili, Aysajan Abidin, &amp Bart Preneel <strong>“CARPOOL: Secure And Reliable Proof of Location”</strong> In <em>Cryptology ePrint Archive</em>, <a href="https://eprint.iacr.org/2025/1502">iacr 2025 1502</a>, 2025</li>
        <li>Roosbeh Sarenche, S. Aghili, Dave Singelée, &amp;  Takahito Yoshizawa <strong>“DASLog: Decentralized Auditable Secure Logging for UAV Ecosystems”</strong> In <em>IEEE Internet of Things Journal 10(23)</em>, pp. 20264-20284, doi:<a href="https://doi.org/10.1109/JIOT.2023.3281263">10.1109/JIOT.2023.3281263</a>, 2023</li>
        <li>Xiaoting Huang, Takahito Yoshizawa, &amp;  Sheeba Backia Mary Baskaran <strong>“Authentication Mechanisms in the 5G System”</strong> In <em>Journal of ICT Standardization 9(2)</em>, River Publisher, pp. 61-78, doi:<a href="https://doi.org/10.13052/jicts2245-800X.921">10.13052/jicts2245-800X.921</a>, 2021.</li>
        <li>Takahito Yoshizawa, &amp; Bart Preneel (2020) <strong>“Verification Schemes of Multi-SIM Devices in Mobile Communication Systems”</strong> In <em>ACM International Symposium on Mobility Management and Wireless Access 2020</em>, 7 pages, doi:<a href="https://doi.org/10.1145/3416012.3424620">10.1145/3416012.3424620</a>, 2020.</li>
        <li>Takahito Yoshizawa, Sheeba Backia Mary Baskaran, &amp;  Andreas Kunz <strong>“Overview of 5G URLLC System and Security Aspects in 3GPP”</strong> In <em>IEEE Conference on Standards for Communications and Networking, J. Lopez-Soler and T. Taleb (Eds.)</em>, 5 pages, doi:<a href="https://doi.org/10.1109/CSCN.2019.8931376">10.1109/CSCN.2019.8931376</a>, 2019.</li>
        <li>D.N. Knisely, T. Yoshizawa, F. Favichia <strong>“Standardization of femtocells in 3GPP”</strong> In <em>IEEE Communications Magazine</em>, pp 68-75, doi:<a href="https://doi.org/10.1109/MCOM.2009.5277458">10.1109/MCOM.2009.5277458</a>, 2009.</li>
        <li>D.T. Chen, T. Yoshizawa <strong>“On the bandwidth analysis of a CDMA IP based distributed radio access network”</strong> In <em>Proceedings of the Fourth IASTED International Multi-Conference on Wireless and Optical Communications</em>, pp 590-595, 2004.</li>
      </ul>
      `
    }
  }

  class TPCList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ul class="wp-block-list">
        <li>8th International Workshop on Pervasive Computing for Vehicular Systems (PerVehicle) 2026</li>
        <li>IEEE Vehicular Networking Conference (VNC) 2025</li>
      </ul>
      `
    }
  }
  class PaperReviewList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ul class="wp-block-list">
        <li>Automatika: Journal for Control, Measurement, Electronics, Computing and Communications</li>
        <li>Elsevier Computer Networks</li>
        <li>IEEE Communications Standards Magazine</li>
        <li>IEEE Conference on Standards for Communications and Networking (CSCN), 2023, 2024, 2025</li>
        <li>IEEE Internet of Things Journal</li>
        <li>IEEE Open Journal of the Communications Society</li>
        <li>IEEE Transactions on Industrial Cyber-Physical Systems</li>
        <li>IEEE Transactions on Information Forensics & Security</li>
        <li>IEEE Vehicular Networking Conference (VNC), 2024, 2025</li>
        <li>IEEE Vehicular Technology Conference (VTC), 2021</li>
        <li>IEEE Vehicular Technology Magazine</li>
        <li>Journal of Autonomous Intelligence</li>
        <li>Springer Nature - Journal of Big Data</li>
        <li>Springer Nature - Journal of Cloud Computing</li>
        <li>Springer Nature - Journal of Supercomuting</li>
      </ul>
      `
    }
  }

  class PatentContentGranted extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ul class="wp-block-list">
        <li>T Yoshizawa, N.P. Sasi, R. Rajendran, <strong>“Method and device for reducing security risk in communication”</strong>, <em>US Patent 12,342,247, 2025</em> </li>
        <li>S. Singh, T. Yoshizawa, <strong>“System and method of dual-sim ues operation in 5g networks”</strong>, <em>US Patent 12,232,070</em> </li>
        <li>R. Rajendran, P.K. Singaravelu, N.P. Sasi, T. Yoshizawa, <strong>“Source base station, UE, method in wireless communication system”</strong>, <em>US Patent 12,200,493</em> </li>
        <li>S. De Kievit, T. Yoshizawa, <strong>“Master base station, secondary base station, user equipment (UE), and method”</strong>, <em>US Patent 12,114,162</em> </li>
        <li>A.R. Prasad, S. Lakshminarayanan, S.B.M. Baskaran, S. Arumugam, H. Ito, Takahito Yoshizawa, <strong>“Authentication method for next generation systems”</strong>, <em>US Patent 11,991,165</em> </li>
        <li>S.B.M. Baskaran, S. Arumugam, A.R. Prasad, S. De Kievit, T. Yoshizawa, H. Ito, <strong>“Method, UE, and network for providing KDF negotiation”</strong>, <em>US Patent 11,962,999</em> </li>
        <li>S. De Kievit, H. Ito, A.R. Prasad, T. Yoshizawa, <strong>“Schemes and methods of integrity protection in mobile communication”</strong>, <em>US Patent 11,910,232</em> </li>
        <li>S.B.M. Baskaran, S. Lakshminarayanan, A.R. Prasad, S. Arumugam, H. Ito, Takahito Yoshizawa, <strong>“Communication terminal, network apparatus, communication method, and de-concealment method”</strong>, <em>US Patent 11,877,148</em> </li>
        <li>H. Ito, A.R. Prasad, S. Arumugam, T. Yoshizawa, S. Lakshminarayanan, ..., <strong>“Integrity protection for user plane data in 5G network”</strong>, <em>US Patent 11,722,897</em> </li>
        <li>S.B.M. Baskaran, S. Lakshminarayanan, A.R. Prasad, S. Arumugam, H. Ito, Takahito Yoshizawa, <strong>“Communication terminal, network apparatus, communication method, and de-concealment method”</strong>, <em>US Patent 11,290,874</em> </li>
        <li>T. Yoshizawa, I.S. Gandhi, S.A. Anantha, Y. Zhang <strong>“Call preservation on handover”</strong>, <em>US Patent 10,757,610</em> </li>
        <li>T. Yoshizawa, I.S. Gandhi, S.A. Anantha, Y. Zhang, <strong>“Call preservation on handover”</strong>, <em>US Patent 10,104,582</em> </li>
        <li>T. Yoshizawa, R. Kwan, <strong>“Almost blank subframe based orthogonal resource allocation in a wireless network environment”</strong>, <em>US Patent 10,039,095</em> </li>
        <li>T. Yoshizawa, <strong>“System and method for redirecting a mobile device”</strong>, <em>US Patent 9,844,021</em> </li>
        <li>T. Yoshizawa <strong>“Method and system for performing service admission control”</strong>, <em>US Patent 9,549,414</em> </li>
        <li>T. Yoshizawa, R. Kwan, <strong>“Almost blank subframe based orthogonal resource allocation in a wireless network environment”</strong>, <em>US Patent 9,398,586</em> </li>
        <li>T. Yoshizawa, R. Kwan, <strong>“Almost blank subframe based orthogonal resource allocation in a wireless network environment”</strong>, <em>US Patent 9,288,804</em> </li>
        <li>T. Yoshizawa, <strong>“Method and system for performing service admission control”</strong>, <em>US Patent 8,892,111</em> </li>
        <li>T. Yoshizawa, <strong>“Method for configuring a plurality of parameters in a device”</strong>,<em>US Patent 8,868,055</em> </li>
        <li>K.E. Miller, G.C. Ladden, T. Yoshizawa, <strong>“System and method for sonet equipment fault management”</strong>, <em>US Patent 7,929,860</em> </li>
        <li>T. Yoshizawa, <strong>“Dynamic reduction of route reconvergence time”</strong>, <em>US Patent 7,570,581</em> </li>
      </ul>
      `
    }
  }

  class PatentContentPending extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ul class="wp-block-list">
        <li>S Singh, T Yoshizawa, <strong>“SYSTEM AND METHOD OF DUAL-SIM UES OPERATION IN 5G NETWORKS”</strong>, <em>US Patent App. 19/000,805</em> </li>
        <li>H. Ito, A.R. Prasad, S. Arumugam, T. Yoshizawa, S. Lakshminarayanan, ..., <strong>“INTEGRITY PROTECTION FOR USER PLANE DATA IN 5G NETWORK”</strong>, <em>US Patent App. 18/208,759</em> </li>
        <li>S.B.M. Baskaran, L. Hmi, N. Sivakamy, A.R. Prasad, S. Arumugam, H. Ito, T. Yoshizawa, <strong>“COMMUNICATION TERMINAL, NETWORK APPARATUS, COMMUNICATION METHOD, AND DE-CONCEALMENT METHOD”</strong>, <em>US Patent App. 17/672,274</em> </li>
        <li>T. Yoshizawa, N.P. Sasi, R. Rajendran, <strong>“COMMUNICATION SYSTEM, USER EQUIPMENT, COMMUNICATION METHOD AND COMPUTER READABLE MEDIUM”</strong>, <em>US Patent App. 17/629,595</em> </li>
        <li>N.P. Sasi, R. Rajendran, T. Yoshizawa, T Tamura, <strong>“CREDENTIAL STORAGE AND SELECTION OF CREDENTIALS FOR NON-PUBLIC NETWORK”</strong>, <em>US Patent App. 17/617,458</em> </li>
        <li>T. Yoshizawa, S. Singh, S. De Kievit, <strong>“METHODS AND PROCESS OF VERIFYING MULTI-SIM DEVICE AND SUBSCRIPTION INFORMATION”</strong>, <em>US Patent App. 17/605,038</em> </li>
        <li>A.R. Prasad, S. Lakshminarayanan, S.B.M. Baskaran, S. Arumugam, H. Ito, T. Yoshizawa, <strong>“Authentication method for next generation systems”</strong>, <em>US Patent App. 17/549,156</em> </li>
        <li>A.R. Prasad, S. De Kievit, H. Ito, Takahito Yoshizawa, <strong>“Integrity protection schemes in mobile communication”</strong>, <em>US Patent App. 17/285,991</em> </li>
        <li>S. De Kievit, H. Ito, A.R. Prasad, T. Yoshizawa, <strong>“Schemes and methods of integrity protection in mobile communication”</strong>, <em>US Patent App. 17/284,893</em> </li>
        <li>H. Ito, A.R. Prasad, T. Yoshizawa, S.B.M. BASKARAN, S. ARUMUGAM, ...,  <strong>“Security procedures for common api framework in next generation networks”</strong>, <em>US Patent App. 17/044,383</em> </li>
        <li>H. Ito, A.R. Prasad, S. Arumugam, T. Yoshizawa, S. Lakshminarayanan,  <strong>“Integrity protection for user plane data in 5g network”</strong>, <em>US Patent App. 16/969,363</em> </li>
        <li>T. Yoshizawa, G. Velev, A Kunz, <strong>“Communication system”</strong>, <em>US Patent App. 16/338,506</em> </li>
        <li>T. Yoshizawa, <strong>“System and Method for Redirecting a Mobile Device”</strong>, <em>US Patent App. 15/975,239</em> </li>
        <li>T. Yoshizawa <strong>“System and Method for Redirecting a Mobile Device”</strong>, <em>US Patent App. 15/664,099</em> </li>
        <li>T. Yoshizawa <strong>“System and method for efficient traffic distribution in a network”</strong>, <em>US Patent App. 11/409,910</em> </li>
      </ul>
      `
    }
  }

customElements.define('special-footer', SpecialFooter)
customElements.define('ml-research-paper-list', MLResearchPapers)
customElements.define('v2x-research-paper-list', V2XResearchPapers)
customElements.define('other-research-paper-list', OtherResearchPapers)
customElements.define('tpc-list', TPCList)
customElements.define('paper-review-list', PaperReviewList)
customElements.define('patent-content-granted', PatentContentGranted)
customElements.define('patent-content-pending', PatentContentPending)
