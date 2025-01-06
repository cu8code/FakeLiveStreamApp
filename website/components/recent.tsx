import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Youtube, Video, CheckCircle2, Clock, AlertCircle, Target } from 'lucide-react';

interface ScanResult {
  started: string;
  finished: string;
  duration: string;
  totalInfringements: number;
  targets: number;
  status: 'on process' | 'all resolved' | 'failed';
}

interface Claim {
  source: string;
  username: string;
  postedAt: string;
  contentDuration: string;
  previouslyKnown: boolean;
}

export const RecentTables: React.FC = () => {
  const scanResults: ScanResult[] = [
    {
      started: "2024-01-20",
      finished: "2024-01-21",
      duration: "45 mins",
      totalInfringements: 156,
      targets: 1250,
      status: "all resolved"
    },
    {
      started: "2024-01-19",
      finished: "2024-01-19",
      duration: "30 mins",
      totalInfringements: 89,
      targets: 980,
      status: "on process"
    },
    {
      started: "2024-01-18",
      finished: "2024-01-18",
      duration: "28 mins",
      totalInfringements: 92,
      targets: 875,
      status: "all resolved"
    },
    {
      started: "2024-01-17",
      finished: "2024-01-17",
      duration: "35 mins",
      totalInfringements: 178,
      targets: 1450,
      status: "failed"
    },
    {
      started: "2024-01-16",
      finished: "2024-01-16",
      duration: "40 mins",
      totalInfringements: 145,
      targets: 1100,
      status: "all resolved"
    },
    {
      started: "2024-01-15",
      finished: "2024-01-15",
      duration: "25 mins",
      totalInfringements: 67,
      targets: 750,
      status: "all resolved"
    }
  ];

  const claimsData: Claim[] = [
    {
      source: "Youtube",
      username: "cu8code",
      postedAt: "20/02/24",
      contentDuration: "100 min",
      previouslyKnown: true
    },
    {
      source: "Vimeo",
      username: "creator123",
      postedAt: "21/02/24",
      contentDuration: "45 min",
      previouslyKnown: false
    },
    {
      source: "TikTok",
      username: "videomaker",
      postedAt: "22/02/24",
      contentDuration: "15 min",
      previouslyKnown: true
    },
    {
      source: "Youtube",
      username: "studiocrafts",
      postedAt: "23/02/24",
      contentDuration: "75 min",
      previouslyKnown: true
    },
    {
      source: "Instagram",
      username: "visualarts.co",
      postedAt: "24/02/24",
      contentDuration: "5 min",
      previouslyKnown: false
    },
    {
      source: "Youtube",
      username: "techreviewer",
      postedAt: "24/02/24",
      contentDuration: "120 min",
      previouslyKnown: true
    },
    {
      source: "Vimeo",
      username: "filmproduction",
      postedAt: "25/02/24",
      contentDuration: "180 min",
      previouslyKnown: false
    },
    {
      source: "TikTok",
      username: "shortclips",
      postedAt: "25/02/24",
      contentDuration: "3 min",
      previouslyKnown: true
    },
    {
      source: "Youtube",
      username: "educhannel",
      postedAt: "26/02/24",
      contentDuration: "90 min",
      previouslyKnown: true
    },
    {
      source: "Instagram",
      username: "creative.minds",
      postedAt: "26/02/24",
      contentDuration: "8 min",
      previouslyKnown: false
    }
  ];
  const getStatusColor = (status: ScanResult['status']): string => {
    switch (status.toLowerCase()) {
      case 'on process':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'all resolved':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status: ScanResult['status']) => {
    switch (status.toLowerCase()) {
      case 'on process':
        return <Clock className="w-4 h-4" />;
      case 'all resolved':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getSourceIcon = (source: string) => {
    switch (source.toLowerCase()) {
      case 'youtube':
        return <Youtube className="w-4 h-4 text-red-500" />;
      default:
        return <Video className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-xl font-medium">Latest Scan Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Started</TableHead>
                <TableHead>Finished</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    Targets
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total Infringements</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scanResults.map((scan, index) => (
                <TableRow key={index}>
                  <TableCell>{scan.started}</TableCell>
                  <TableCell>{scan.finished}</TableCell>
                  <TableCell>{scan.duration}</TableCell>
                  <TableCell>{scan.targets.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${getStatusColor(scan.status)}`}>
                      {getStatusIcon(scan.status)}
                      <span className="text-sm">{scan.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {scan.totalInfringements.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-xl font-medium">Latest Claims Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Posted at</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Known</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {claimsData.map((claim, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getSourceIcon(claim.source)}
                      {claim.source}
                    </div>
                  </TableCell>
                  <TableCell>{claim.username}</TableCell>
                  <TableCell>{claim.postedAt}</TableCell>
                  <TableCell>{claim.contentDuration}</TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
                      claim.previouslyKnown 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {claim.previouslyKnown ? 
                        <CheckCircle2 className="w-3 h-3" /> : 
                        <AlertCircle className="w-3 h-3" />
                      }
                      {claim.previouslyKnown ? "Yes" : "No"}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};