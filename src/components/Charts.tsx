'use client';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Revenue trend data
export const revenueTrendData = [
  { month: 'Jan', revenue: 125000, target: 130000 },
  { month: 'Feb', revenue: 145000, target: 135000 },
  { month: 'Mar', revenue: 138000, target: 140000 },
  { month: 'Apr', revenue: 168000, target: 150000 },
  { month: 'May', revenue: 185000, target: 160000 },
  { month: 'Jun', revenue: 192000, target: 170000 },
];

// EBITDA data
export const ebitdaData = [
  { month: 'Jan', ebitda: 32000, margin: 25.6 },
  { month: 'Feb', ebitda: 36000, margin: 24.8 },
  { month: 'Mar', ebitda: 35000, margin: 25.4 },
  { month: 'Apr', ebitda: 42000, margin: 25.0 },
  { month: 'May', ebitda: 48000, margin: 25.9 },
  { month: 'Jun', ebitda: 54000, margin: 28.1 },
];

// Cash flow data
export const cashFlowData = [
  { month: 'Jan', inflow: 125000, outflow: 95000 },
  { month: 'Feb', inflow: 145000, outflow: 102000 },
  { month: 'Mar', inflow: 138000, outflow: 98000 },
  { month: 'Apr', inflow: 168000, outflow: 110000 },
  { month: 'May', inflow: 185000, outflow: 125000 },
  { month: 'Jun', inflow: 192000, outflow: 135000 },
];

// Deal pipeline
export const dealPipelineData = [
  { stage: 'Sourcing', value: 45, deals: 12 },
  { stage: 'Initial Screen', value: 32, deals: 8 },
  { stage: 'Deep Dive', value: 18, deals: 4 },
  { stage: 'LOI Pending', value: 12, deals: 2 },
  { stage: 'Final Review', value: 8, deals: 1 },
];

// Portfolio composition
export const portfolioData = [
  { name: 'Tech & Software', value: 35 },
  { name: 'Healthcare', value: 25 },
  { name: 'Industrial', value: 20 },
  { name: 'Consumer', value: 20 },
];

const COLORS = ['#1e40af', '#0284c7', '#0ea5e9', '#38bdf8'];

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={revenueTrendData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#f1f5f9',
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#1e40af"
          strokeWidth={2}
          dot={{ fill: '#1e40af' }}
          name="Actual Revenue"
        />
        <Line
          type="monotone"
          dataKey="target"
          stroke="#cbd5e1"
          strokeWidth={2}
          strokeDasharray="5 5"
          name="Target"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function EbitdaChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={ebitdaData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#f1f5f9',
          }}
        />
        <Legend />
        <Bar dataKey="ebitda" fill="#0284c7" name="EBITDA ($)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function CashFlowChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={cashFlowData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#f1f5f9',
          }}
        />
        <Legend />
        <Bar dataKey="inflow" fill="#10b981" name="Cash Inflow" />
        <Bar dataKey="outflow" fill="#ef4444" name="Cash Outflow" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function DealPipelineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={dealPipelineData}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 150, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis type="number" stroke="#94a3b8" />
        <YAxis dataKey="stage" type="category" stroke="#94a3b8" width={140} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#f1f5f9',
          }}
        />
        <Bar dataKey="value" fill="#8b5cf6" name="Deal Count" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function PortfolioCompositionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
        <Pie
          data={portfolioData}
          cx="50%"
          cy="50%"
          labelLine={true}
          label={({ name, value }) => `${name}: ${value}%`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {portfolioData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#f1f5f9',
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
