import { TrendingUp, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

export function RightSidebar() {
  const newsItems = [
    {
      title: "Karnataka bus strike begins",
      time: "1m ago",
      readers: "21,247 readers",
    },
    {
      title: "IndusInd Bank appoints new CEO",
      time: "14m ago",
      readers: "20,499 readers",
    },
    {
      title: "GCCs to step up hiring",
      time: "43m ago",
      readers: "3,431 readers",
    },
    {
      title: "Pharma to lead pay hikes race",
      time: "43m ago",
      readers: "1,210 readers",
    },
    {
      title: "Costs eat into F&B margins",
      time: "43m ago",
      readers: "652 readers",
    },
  ];

  return (
    <div className="space-y-4">
      {/* LinkedIn News */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold">
              LinkedIn News
            </CardTitle>
            <TrendingUp className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-sm text-gray-600">Top stories</p>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded"
              >
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.time} • {item.readers}
                </p>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-3 text-sm text-gray-600">
            <ChevronDown className="w-4 h-4 mr-1" />
            Show more
          </Button>
        </CardContent>
      </Card>

      {/* Today's Puzzle */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">
            Today&apos;s puzzle
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center">
              <span className="text-orange-600 font-bold text-lg">Zip</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">
                Zip - a quick brain teaser
              </h4>
              <p className="text-xs text-gray-500">Solve in 60s or less!</p>
              <p className="text-xs text-gray-500 mt-1">
                👁️ Score is private to you
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Premium Ad */}
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
        <CardContent className="p-4">
          <div className="text-center">
            <p className="text-sm text-gray-700 mb-2">
              Enjoy 50% off 2 months of LinkedIn Premium
            </p>
            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <div className="flex items-center justify-center mb-3">
              <span className="bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded">
                Premium
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              Boost your job search with AI-powered insights
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
              Redeem offer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Footer Links */}
      <div className="text-xs text-gray-500 space-y-2 px-4">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Accessibility
          </a>
          <a href="#" className="hover:text-blue-600">
            Help Center
          </a>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a href="#" className="hover:text-blue-600">
            Privacy & Terms
          </a>
          <a href="#" className="hover:text-blue-600">
            Ad Choices
          </a>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a href="#" className="hover:text-blue-600">
            Advertising
          </a>
          <a href="#" className="hover:text-blue-600">
            Business Services
          </a>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a href="#" className="hover:text-blue-600">
            Get the LinkedIn app
          </a>
          <a href="#" className="hover:text-blue-600">
            More
          </a>
        </div>
        <div className="pt-2 border-t border-gray-200">
          <p>LinkedIn Corporation © 2025</p>
        </div>
      </div>
    </div>
  );
}
