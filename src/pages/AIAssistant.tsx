import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AIAssistant = () => {
  // TODO: Check user subscription status
  const isPremiumUser = false; // This will be connected to Stripe subscription

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">
              AI <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Assistant</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your personal AI coach, available 24/7 to answer questions and guide your training.
          </p>
        </div>

        {!isPremiumUser ? (
          // Paywall for non-premium users
          <Card className="bg-gradient-to-b from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Premium Feature</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The AI Assistant is available exclusively to Premium members. Upgrade now to get instant access to personalized coaching.
              </p>
              <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Availability</h3>
                    <p className="text-sm text-muted-foreground">Get answers anytime, anywhere</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Guidance</h3>
                    <p className="text-sm text-muted-foreground">Training advice tailored to your goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Expert Knowledge</h3>
                    <p className="text-sm text-muted-foreground">Trained on elite coaching methodologies</p>
                  </div>
                </div>
              </div>
              <Link to="/pricing">
                <Button size="lg" className="bg-primary hover:bg-primary/90 animate-glow">
                  Upgrade to Premium
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          // AI Assistant interface for premium users
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Chat with Your AI Coach</CardTitle>
              <CardDescription>
                Ask questions about training, nutrition, recovery, and more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* TODO: Integrate Dify AI Assistant iframe or API here */}
              <div className="bg-muted rounded-lg p-8 text-center min-h-[500px] flex items-center justify-center">
                <div>
                  <p className="text-muted-foreground mb-4">
                    AI Assistant interface will be integrated here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    (Dify AI integration pending)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;
