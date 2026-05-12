import React, { useState } from 'react';
import { 
  BookOpen, Cloud, Server, Shield, Zap, Target, 
  CheckCircle, ChevronRight, Users, Briefcase, 
  Globe, Gamepad2, Video, Database, Lock, PlayCircle,
  Award, BarChart, ArrowRight, Layers, Cpu, Network, HardDrive, DollarSign, ShieldCheck
} from 'lucide-react';

// --- DATA & CONTENT ---

const MODULES = [
  { id: 'welcome', title: '1. Welcome to 10centric', icon: Users },
  { id: 'services', title: '2. Our Services & Solutions', icon: Briefcase },
  { id: 'partnership', title: '3. The Tencent Partnership', icon: Award },
  { id: 'cloud-basics', title: '4. Cloud Basics (Deep Dive)', icon: Cloud },
  { id: 'tencent-solutions', title: '5. Tencent Cloud Standouts', icon: Zap },
];

// --- COMPONENTS ---

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md disabled:bg-blue-300",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200",
    success: "bg-green-500 hover:bg-green-600 text-white shadow-md"
  };
  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- MODULE CONTENT COMPONENTS ---

const ModuleWelcome = ({ onComplete }) => (
  <div className="space-y-8 animate-fadeIn">
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to 10centric</h1>
      <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">
        As our newest Sales Manager, you are spearheading our mission to expand Tencent Cloud into the Balkans, South/Central Eastern Europe, and MENA regions. Your immediate objective is to help us hit a $20k/month consumption pipeline and drive our roadmap to becoming an official Managed Service Provider (MSP) by Q4 2026.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6 border-t-4 border-t-blue-500">
        <Target className="w-10 h-10 text-blue-500 mb-4" />
        <h3 className="text-xl font-bold text-slate-800 mb-2">Our Target Audience</h3>
        <p className="text-slate-600 text-sm">We focus on 75% SMEs and 25% MNCs. Our priority industries are Gaming, Manufacturing, eCommerce, Web3/AI, Fintech, and Media. You'll target ~30 outreaches a week to secure 5 qualified meetings monthly.</p>
      </Card>
      <Card className="p-6 border-t-4 border-t-purple-500">
        <Users className="w-10 h-10 text-purple-500 mb-4" />
        <h3 className="text-xl font-bold text-slate-800 mb-2">The Value We Bring</h3>
        <p className="text-slate-600 text-sm">We provide localized cloud consulting, complex migration support, enterprise-grade reliability, and regional compliance guidance—all backed by ongoing technical support.</p>
      </Card>
      <Card className="p-6 border-t-4 border-t-emerald-500">
        <Award className="w-10 h-10 text-emerald-500 mb-4" />
        <h3 className="text-xl font-bold text-slate-800 mb-2">Your Path to MSP</h3>
        <p className="text-slate-600 text-sm">To hit our Q4 2026 MSP goal, your onboarding includes completing the Tencent Cloud Practitioner certification, followed by specialized TCCA and TCCP architectures via the Partner Academy.</p>
      </Card>
    </div>

    <div className="flex justify-end pt-6">
      <Button onClick={onComplete}>Mark as Complete & Continue <ArrowRight className="w-4 h-4" /></Button>
    </div>
  </div>
);

const ModuleServices = ({ onComplete }) => {
  const services = [
    { title: "SME Solutions (IaaS/PaaS)", desc: "Deal sizes of $5k-$15k/month. We deploy agile infrastructure utilizing core compute, Media Services (CSS, TRTC, MPS), and Network Security (EdgeOne). Typical PoC to production takes 1-3 months.", icon: Cloud },
    { title: "MNC Go-To-China Acceleration", desc: "Deal sizes >$15k/month. We utilize EdgeOne cross-border routing to overcome firewall latency, connecting global businesses to the massive Asian market seamlessly. PoC takes 9-12 months.", icon: Globe },
    { title: "Hybrid & Private Cloud Deployments", desc: "For enterprises with strict local data sovereignty requirements or those seeking a VMware replacement, we deploy Tencent Cloud Enterprise (TCE) locally.", icon: Server },
    { title: "Data, AI & Managed Services", desc: "Continuous FinOps (cost-optimization), NOC/SOC monitoring, and integrating advanced data tools like TokenHub and AI into existing client architectures.", icon: Database }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">What We Sell: 10centric Services</h2>
        <p className="text-slate-600 text-lg">We differentiate by segmenting our approach. Whether it's a nimble SME or a complex MNC, we have a tailored playbook.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((svc, idx) => (
          <Card key={idx} className="p-6 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <svc.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{svc.title}</h3>
                <p className="text-slate-600 text-sm">{svc.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-bold text-slate-800 mb-2">💡 Sales Tactics & Lead Generation:</h4>
        <p className="text-slate-700 text-sm mb-2">We utilize multi-channel outreach (Email campaigns, LinkedIn leveraging official TC accounts) and major marketing events like Vivatech and our Sofia events.</p>
        <p className="text-slate-700 text-sm"><strong>Your Goal:</strong> Double Sales Qualified Leads (SQLs) for Q3. We conduct the 1st qualification round, then loop in Tencent for the 2nd round to initiate the PoC.</p>
      </div>

      <div className="flex justify-end pt-6">
        <Button onClick={onComplete}>Mark as Complete & Continue <ArrowRight className="w-4 h-4" /></Button>
      </div>
    </div>
  );
};

const ModulePartnership = ({ onComplete }) => (
  <div className="space-y-8 animate-fadeIn">
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Alliance: Tencent Cloud</h2>
      <p className="text-slate-600 text-lg">10centric is an official Standard Partner (ID: 2000-43036658). Here is our competitive battlecard when pitching against AWS or Alibaba.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6 border-l-4 border-l-blue-600">
        <Globe className="w-8 h-8 text-blue-600 mb-3" />
        <h3 className="text-lg font-bold text-slate-800 mb-2">Global Infrastructure</h3>
        <p className="text-slate-600 text-sm">Tencent operates 1 million+ servers globally across 22 Regions and 64 Availability Zones. Crucially for us, they have 158 CDN cache nodes across 23 European countries, guaranteeing ultra-low latency (40-80ms) for local clients.</p>
      </Card>

      <Card className="p-6 border-l-4 border-l-purple-600">
        <Gamepad2 className="w-8 h-8 text-purple-600 mb-3" />
        <h3 className="text-lg font-bold text-slate-800 mb-2">Unmatched Consumer DNA</h3>
        <p className="text-slate-600 text-sm">Tencent owns 3 of the top 5 grossing global mobile games (Honor of Kings, PUBG Mobile) and runs WeChat (1.33B users). Their cloud is battle-tested by the largest consumer workloads on earth. They are #1 in APAC for Media Services.</p>
      </Card>

      <Card className="p-6 border-l-4 border-l-emerald-600">
        <DollarSign className="w-8 h-8 text-emerald-600 mb-3" />
        <h3 className="text-lg font-bold text-slate-800 mb-2">Cost & Performance Leadership</h3>
        <p className="text-slate-600 text-sm">Tencent leads with advanced AMD-powered instances (SA5 Bergamo) offering 160 Gbps network bandwidth. They deliver 30-90% better price/performance than Alibaba's mixed-generation CPUs and AWS's slower iterations.</p>
      </Card>

      <Card className="p-6 border-l-4 border-l-rose-600">
        <Layers className="w-8 h-8 text-rose-600 mb-3" />
        <h3 className="text-lg font-bold text-slate-800 mb-2">Open Ecosystem</h3>
        <p className="text-slate-600 text-sm">Unlike Huawei's hardware-bound solutions, Tencent offers full hardware/software decoupling to avoid vendor lock-in. Their strategic open-source partnerships (Elastic, Flink) far surpass competitors' closed ecosystems.</p>
      </Card>
    </div>

    <div className="flex justify-end pt-6">
      <Button onClick={onComplete}>Mark as Complete & Continue <ArrowRight className="w-4 h-4" /></Button>
    </div>
  </div>
);

const ModuleCloudBasics = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState('models');

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Cloud Basics: Deep Dive</h2>
        <p className="text-slate-600">Aligned with the Tencent Cloud Practitioner curriculum, this section provides an exhaustive breakdown of core cloud computing principles required for your certification.</p>
      </div>

      <div className="flex border-b border-slate-200 overflow-x-auto pb-0">
        {[
          { id: 'models', label: 'Service Models', icon: Layers },
          { id: 'economics', label: 'Economics & FinOps', icon: DollarSign },
          { id: 'architecture', label: 'Architecture & HA', icon: Server },
          { id: 'compute', label: 'Compute & Storage', icon: HardDrive },
          { id: 'networking', label: 'Networking & Sec', icon: Network }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 font-medium text-sm transition-colors whitespace-nowrap flex items-center gap-2 rounded-t-lg -mb-px ${activeTab === tab.id ? 'bg-white text-blue-700 border-t border-l border-r border-slate-200' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-t border-l border-r border-transparent'}`}
          >
            <tab.icon className="w-4 h-4" /> {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 md:p-8 rounded-b-xl rounded-tr-xl border border-slate-200 shadow-sm min-h-[500px]">
        {activeTab === 'models' && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-800 border-b pb-2">The Cloud Service Stack</h3>
            <p className="text-slate-700">Cloud computing shifts IT management from the customer to the provider in varying degrees. Understanding these boundaries is critical for scoping 10centric's managed services.</p>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-bold text-lg text-blue-800">1. On-Premises (Traditional IT)</h4>
                <p className="text-sm text-slate-700 mt-1">The customer manages everything: physical networking, storage, servers, virtualization hypervisors, OS, middleware, runtime, data, and applications. High CapEx and slow deployment.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-bold text-lg text-blue-800">2. IaaS (Infrastructure as a Service)</h4>
                <p className="text-sm text-slate-700 mt-1">Tencent manages the physical facilities, hardware, and virtualization. The customer manages the Operating System (patching, securing) and everything above it. <strong>Examples:</strong> Tencent Cloud Virtual Machine (CVM), Cloud Block Storage (CBS). Gives maximum flexibility.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-bold text-lg text-blue-800">3. CaaS (Container as a Service) & PaaS (Platform as a Service)</h4>
                <p className="text-sm text-slate-700 mt-1"><strong>CaaS:</strong> Abstracts the OS. Customers deploy container images. Tencent manages the underlying cluster orchestration. <strong>Example:</strong> Tencent Kubernetes Engine (TKE).<br/><strong>PaaS:</strong> Tencent manages the OS, middleware, and runtime environment. Developers only deploy their application code and data. <strong>Examples:</strong> TDSQL (Managed Database), TRTC.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-bold text-lg text-blue-800">4. SaaS (Software as a Service) & FaaS (Function as a Service)</h4>
                <p className="text-sm text-slate-700 mt-1"><strong>SaaS:</strong> Fully managed end-user applications accessed via the web. <strong>Examples:</strong> Tencent Meeting (VooV), WeChat Work.<br/><strong>FaaS (Serverless):</strong> Event-driven computing. Developers write pure code functions. Tencent spins up infrastructure for milliseconds to execute it, then spins it down. Zero server management. <strong>Example:</strong> Serverless Cloud Function (SCF).</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'economics' && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-800 border-b pb-2">Cloud Economics & FinOps</h3>
            <p className="text-slate-700">We help clients shift from guessing capacity to consuming IT as a precise utility. This is the financial argument for 10centric's services.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-slate-800">CapEx vs. OpEx</h4>
                <p className="text-sm text-slate-700"><strong>Capital Expenditure (CapEx):</strong> Upfront investments in hardware and facilities. Assets depreciate. Businesses must guess future capacity, leading to either expensive over-provisioning (idle servers) or catastrophic under-provisioning (crashed websites during traffic spikes).</p>
                <p className="text-sm text-slate-700"><strong>Operational Expenditure (OpEx):</strong> The cloud model. Pay-as-you-go. No upfront costs. IT becomes a monthly utility bill that perfectly scales alongside revenue.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-slate-800">Tencent Cloud Pricing Models</h4>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Pay-as-you-go:</strong> Billed by the second or hour. Perfect for unpredictable, spiky workloads (e.g., a new game launch).</li>
                  <li><strong>Reserved Instances (RI):</strong> Committing to 1-year or 3-year usage in exchange for massive discounts (up to 70%). Ideal for steady-state databases and baseline application servers.</li>
                  <li><strong>Spot Instances:</strong> Bidding on unused Tencent server capacity at up to 90% discount. Tencent can interrupt these with a 2-minute warning. Ideal for fault-tolerant, stateless batch processing or big data analytics.</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-blue-900 text-sm mt-4 border border-blue-200">
              <strong className="block text-base mb-1">FinOps (Financial Operations):</strong> 
              As an MSP, 10centric implements FinOps for our clients. We bring engineering, finance, and business teams together to right-size instances, monitor waste, and maximize the business value of every dollar spent in Tencent Cloud. Elastic IPs and Cloud Redis from Tencent are especially cost-effective compared to AWS.
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-800 border-b pb-2">Architecture, HA & Shared Responsibility</h3>
            
            <div className="space-y-6 text-slate-700 text-sm">
              <div>
                <h4 className="font-bold text-lg text-slate-800 mb-2">Global Infrastructure</h4>
                <p className="mb-2"><strong>Regions:</strong> A distinct geographical location (e.g., Frankfurt, Singapore, Silicon Valley). Regions are completely isolated from one another to ensure fault tolerance and data sovereignty compliance.</p>
                <p><strong>Availability Zones (AZs):</strong> Within each Region are multiple AZs. An AZ is one or more discrete physical data centers with redundant power, cooling, and networking. AZs in the same Region are connected via ultra-low latency dedicated fiber.</p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-slate-800 mb-2">High Availability (HA) & Disaster Recovery (DR)</h4>
                <p className="mb-2"><strong>HA Design:</strong> To survive a localized physical disaster (like a data center fire), we architect client applications to run concurrently across multiple AZs, using a Cloud Load Balancer (CLB) to route traffic to healthy instances.</p>
                <p><strong>DR Metrics:</strong> When designing backups, we balance <strong>RTO</strong> (Recovery Time Objective: how fast must the system be back online?) against <strong>RPO</strong> (Recovery Point Objective: how much recent data loss can the business survive?).</p>
              </div>

              <div className="p-5 bg-orange-50 border border-orange-200 rounded-lg">
                <h4 className="font-bold text-lg text-orange-900 mb-2">The Shared Responsibility Model</h4>
                <p className="mb-2">This is the most critical concept for defining 10centric's liability and role:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Tencent Cloud</strong> is responsible for the <em>"Security OF the Cloud"</em>: Physical data center security, hardware maintenance, network infrastructure, and hypervisor patching.</li>
                  <li><strong>The Customer (or 10centric as their MSP)</strong> is responsible for the <em>"Security IN the Cloud"</em>: Guest Operating System patching, configuring network Security Groups/Firewalls, Identity & Access Management (IAM), and encrypting sensitive customer data.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'compute' && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-800 border-b pb-2">Compute & Storage Fundamentals</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-xl text-blue-800 mb-4 flex items-center gap-2"><Cpu className="w-5 h-5"/> Compute Tiers</h4>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li><strong>CVM (Cloud Virtual Machine):</strong> The core workhorse. Elastic, virtualized servers. Tencent leads the market here with their SA5 Bergamo AMD instances that offer massive bandwidth and lower costs than Intel equivalents. Creation and startup leads the industry.</li>
                  <li><strong>Bare Metal (CPM):</strong> Dedicated physical servers leased to a single client. Zero virtualization overhead. Required for legacy apps requiring direct hardware access, strict regulatory compliance, or extreme high-performance computing.</li>
                  <li><strong>Auto Scaling (AS):</strong> A service that automatically adds or removes CVM instances based on real-time CPU/memory metrics, ensuring the app handles traffic spikes elastically without human intervention.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-xl text-emerald-800 mb-4 flex items-center gap-2"><HardDrive className="w-5 h-5"/> Storage Classes</h4>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li><strong>Cloud Block Storage (CBS):</strong> Acts like a local hard drive. It is attached to a single CVM. It provides ultra-low latency and high IOPS, making it mandatory for OS boot drives and transactional databases.</li>
                  <li><strong>Cloud Object Storage (COS):</strong> A flat namespace accessed via APIs (HTTP/S). Offers virtually infinite scalability and 99.999999999% durability. Ideal for media streaming, big data lakes, and backups. Features <em>Intelligent Tiering</em> and built-in media transcoding.</li>
                  <li><strong>Cloud File Storage (CFS):</strong> A managed network file system (using NFS/CIFS protocols). Can be mounted and read/written by hundreds of CVMs simultaneously. Perfect for shared content management systems.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'networking' && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-800 border-b pb-2">Networking & Security</h3>
            
            <div className="space-y-5 text-slate-700 text-sm">
              <p>Network architecture is where 10centric adds massive value by designing secure, isolated, and performant topologies.</p>
              
              <div>
                <h4 className="font-bold text-lg text-slate-800">VPC (Virtual Private Cloud) & Subnets</h4>
                <p className="mt-1">A VPC is a logically isolated, private network dedicated to your Tencent Cloud account. You control the IP range, routing, and gateways. A VPC is divided into <strong>Subnets</strong>:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Public Subnets:</strong> Have a direct route to an Internet Gateway. Instances here (like Web Servers) can be accessed from the outside world.</li>
                  <li><strong>Private Subnets:</strong> Completely isolated from the internet. Instances here (like backend Databases) are secure. If they need to download a software patch, they route traffic outward through a NAT (Network Address Translation) Gateway.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg text-slate-800">Firewalls: Security Groups vs. ACLs</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Security Groups:</strong> <em>Stateful</em>, instance-level virtual firewalls. (Stateful means if you allow an incoming request on port 443, the outbound response is automatically permitted).</li>
                  <li><strong>Network ACLs:</strong> <em>Stateless</em>, subnet-level firewalls. (Stateless means you must explicitly write separate rules allowing inbound AND outbound traffic). Used as an extra layer of defense.</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                <h4 className="font-bold text-lg text-red-800 flex items-center gap-2"><ShieldCheck className="w-5 h-5"/> Edge Security & Routing</h4>
                <p className="mt-1">Tencent provides <strong>Anti-DDoS Advanced</strong> (utilizing massive global scrubbing centers to absorb volumetric botnet attacks) and <strong>WAF (Web Application Firewall)</strong> to inspect HTTP traffic. Additionally, DNSPod provides 91 global DNS nodes with 50-60ms lookup latency—doubling competitors' capacities.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={onComplete}>
          Complete Section <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

const ModuleTencentSolutions = ({ onComplete }) => {
  const [activeSol, setActiveSol] = useState(0);
  
  const solutions = [
    {
      title: "Audio & Video (TRTC & CSS)",
      icon: Video,
      color: "text-rose-500",
      bg: "bg-rose-50",
      subtitle: "Industry-leading Media Services",
      content: "Tencent is #1 in APAC for Media Services, powering platforms handling massive concurrency. \n\n- TRTC (Tencent Real-Time Communication): Provides ultra-low latency (<300ms) audio/video calls globally. \n- CSS (Cloud Streaming Services) & VOD (Video on Demand).\n- MPS (Media Processing Service) for rapid transcoding.\n\nTarget Clients: EdTech, Telehealth, Social Apps, E-commerce Live Shopping.\nPitch: 'Validated by 1.3B WeChat users, TC delivers unmatched media stability.'"
    },
    {
      title: "Gaming & SuperApp Ecosystems",
      icon: Gamepad2,
      color: "text-purple-500",
      bg: "bg-purple-50",
      subtitle: "GSE, GME & TCSAS",
      content: "Tencent owns major global games (PUBG Mobile, Honor of Kings) and the WeChat SuperApp. Their cloud is built for massive consumer interaction.\n\n- GSE (Game Server Engine) & GME (Game Multimedia Engine): Spatial 3D voice chat and server autoscaling.\n- TCSAS (Tencent Cloud SuperApp as a Service): A unique framework allowing overseas clients to build their own WeChat-like mini-program ecosystems within their apps.\n\nTarget Clients: Game studios, Publishers, Retailers wanting digital ecosystems."
    },
    {
      title: "Global Network & Go-To-China",
      icon: Globe,
      color: "text-blue-500",
      bg: "bg-blue-50",
      subtitle: "EdgeOne, GAAP & CCN",
      content: "Connecting Western apps to Chinese users is notoriously slow due to firewall latency. Tencent solves this.\n\n- EdgeOne: An all-in-one platform combining global CDN acceleration, Serverless edge computing, WAF, and DDoS protection.\n- CCN (Cloud Connect Network) & GAAP (Global Application Acceleration Platform): Dedicated leased lines for ultra-fast, compliant cross-border data transfer.\n\nTarget Clients: MNCs, Global enterprises, Retailers expanding to Asia."
    },
    {
      title: "Hybrid Cloud & Advanced AI",
      icon: Database,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      subtitle: "TCE, TDSQL & DeepSeek",
      content: "Enterprise-grade modernization and intelligence.\n\n- TCE (Tencent Cloud Enterprise): A full-stack hybrid cloud platform with 100% iso-code to the public cloud. The ultimate general solution for VMware replacement on-premises.\n- TDSQL: Financial-grade distributed database.\n- AI Integration: Tencent Cloud integrates advanced models like DeepSeek-V3 for cost-effective AI, alongside Tencent Hunyuan 3D generative capabilities.\n\nTarget Clients: Fintech, Healthcare, Enterprises with strict data sovereignty."
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Tencent Cloud: The Standouts</h2>
        <p className="text-slate-600">While Tencent offers standard compute and storage, these are their 'hero' products that differentiate from AWS or Azure and win deals.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-2">
          {solutions.map((sol, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSol(idx)}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                activeSol === idx ? `${sol.bg} border-${sol.color.split('-')[1]}-500 shadow-sm` : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <sol.icon className={`w-6 h-6 ${sol.color}`} />
              <div>
                <div className="font-bold text-slate-800">{sol.title}</div>
                <div className="text-xs text-slate-500">{sol.subtitle}</div>
              </div>
            </button>
          ))}
        </div>
        <div className="lg:col-span-2">
          <Card className="p-8 h-full min-h-[350px]">
            {solutions.map((sol, idx) => (
              <div key={idx} className={`${activeSol === idx ? 'block animate-fadeIn' : 'hidden'} h-full flex flex-col`}>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div className={`p-4 rounded-xl ${sol.bg}`}>
                    <sol.icon className={`w-8 h-8 ${sol.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{sol.title}</h3>
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full mt-1 font-medium">{sol.subtitle}</span>
                  </div>
                </div>
                <div className="text-slate-700 whitespace-pre-wrap leading-relaxed flex-1">
                  {sol.content}
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <Button onClick={onComplete} variant="success">
          <Award className="w-5 h-5 mr-1" /> Complete Training
        </Button>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [currentModuleId, setCurrentModuleId] = useState(MODULES[0].id);
  const [completedModules, setCompletedModules] = useState([]);
  const [showCertificate, setShowCertificate] = useState(false);

  const handleComplete = (id) => {
    if (!completedModules.includes(id)) {
      const newCompleted = [...completedModules, id];
      setCompletedModules(newCompleted);
      
      const currentIndex = MODULES.findIndex(m => m.id === id);
      if (currentIndex < MODULES.length - 1) {
        setCurrentModuleId(MODULES[currentIndex + 1].id);
      } else {
        setShowCertificate(true);
      }
    } else {
      const currentIndex = MODULES.findIndex(m => m.id === id);
      if (currentIndex < MODULES.length - 1) {
        setCurrentModuleId(MODULES[currentIndex + 1].id);
      }
    }
  };

  const currentModuleData = MODULES.find(m => m.id === currentModuleId);
  const progressPercentage = (completedModules.length / MODULES.length) * 100;

  if (showCertificate) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl max-w-2xl w-full text-center animate-fadeIn border-t-8 border-blue-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>
          <Award className="w-24 h-24 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-black text-slate-800 mb-2">Training Certified!</h1>
          <p className="text-xl text-slate-600 mb-8">You are now officially ready to dig deep into 10centric solutions and Tencent Cloud architecture.</p>
          
          <div className="bg-slate-50 p-6 rounded-xl text-left border border-slate-200 mb-8">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> Core Competencies Unlocked:</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>✓ 10centric Value Proposition & Services</li>
              <li>✓ Tencent Cloud Strategic Advantages</li>
              <li>✓ Cloud Fundamentals (IaaS, PaaS, SaaS, HA)</li>
              <li>✓ Hero Products (TRTC, Gaming, Database, Network)</li>
            </ul>
          </div>

          <Button onClick={() => setShowCertificate(false)} className="w-full">
            Return to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row font-sans text-slate-900">
      {/* SIDEBAR */}
      <aside className="w-full md:w-80 bg-white border-r border-slate-200 flex flex-col shadow-sm z-10 hidden md:flex h-screen sticky top-0">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <img src="App_Icon_3.png" alt="10centric Logo" className="w-10 h-10 rounded-lg shadow-inner object-contain" />
          <div>
            <h1 className="font-black text-xl tracking-tight text-slate-800">10centric</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Sales Quick Start Guide</p>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-2 flex justify-between items-end">
            <span className="text-sm font-bold text-slate-700">Course Progress</span>
            <span className="text-sm font-bold text-blue-600">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-6 space-y-1">
          {MODULES.map((module, idx) => {
            const isCompleted = completedModules.includes(module.id);
            const isActive = currentModuleId === module.id;
            const isLocked = idx > 0 && !completedModules.includes(MODULES[idx - 1].id) && !isCompleted && !isActive;

            return (
              <button
                key={module.id}
                onClick={() => !isLocked && setCurrentModuleId(module.id)}
                disabled={isLocked}
                className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${
                  isActive ? 'bg-blue-50 text-blue-700 font-semibold shadow-sm border border-blue-100' :
                  isLocked ? 'opacity-50 cursor-not-allowed text-slate-400' :
                  isCompleted ? 'text-slate-700 hover:bg-slate-50' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className={`shrink-0 ${isCompleted && !isActive ? 'text-green-500' : isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                  {isCompleted && !isActive ? <CheckCircle className="w-5 h-5" /> : 
                   isLocked ? <Lock className="w-5 h-5" /> : <module.icon className="w-5 h-5" />}
                </div>
                <span className="text-sm truncate">{module.title}</span>
              </button>
            );
          })}
        </nav>
        
        <div className="p-4 m-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <span className="text-blue-600 font-bold text-sm">SM</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Sales Manager</p>
              <p className="text-xs text-slate-500">Onboarding Track</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE HEADER */}
      <div className="md:hidden bg-white p-4 border-b border-slate-200 sticky top-0 z-20 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <img src="App_Icon_3.png" alt="10centric Logo" className="w-8 h-8 rounded-lg object-contain" />
          <span className="font-bold text-lg">10centric</span>
        </div>
        <div className="text-sm font-medium text-blue-600">
          {Math.round(progressPercentage)}% Complete
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-6 md:p-10">
          
          <div className="mb-8">
            <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">{currentModuleData.title.split('.')[0]} • Training Module</span>
          </div>

          <div className="min-h-[60vh]">
            {currentModuleId === 'welcome' && <ModuleWelcome onComplete={() => handleComplete('welcome')} />}
            {currentModuleId === 'services' && <ModuleServices onComplete={() => handleComplete('services')} />}
            {currentModuleId === 'partnership' && <ModulePartnership onComplete={() => handleComplete('partnership')} />}
            {currentModuleId === 'cloud-basics' && <ModuleCloudBasics onComplete={() => handleComplete('cloud-basics')} />}
            {currentModuleId === 'tencent-solutions' && <ModuleTencentSolutions onComplete={() => handleComplete('tencent-solutions')} />}
          </div>

        </div>
      </main>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
}
