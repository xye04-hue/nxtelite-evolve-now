import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Strength", "Nutrition", "Cardio", "Mindset", "Recovery"];

  const courses = [
    {
      title: "Advanced Strength Training",
      category: "Strength",
      level: "Advanced",
      duration: "12 weeks",
      description: "Master compound lifts and advanced programming techniques for maximum strength gains."
    },
    {
      title: "Performance Nutrition",
      category: "Nutrition",
      level: "Intermediate",
      duration: "8 weeks",
      description: "Learn to fuel your body for optimal performance and recovery."
    },
    {
      title: "Elite Conditioning",
      category: "Cardio",
      level: "Advanced",
      duration: "10 weeks",
      description: "Develop elite-level cardiovascular fitness and endurance."
    },
    {
      title: "Mental Toughness Training",
      category: "Mindset",
      level: "All Levels",
      duration: "6 weeks",
      description: "Build unshakeable mental resilience and championship mindset."
    },
    {
      title: "Recovery Protocols",
      category: "Recovery",
      level: "Intermediate",
      duration: "6 weeks",
      description: "Optimize recovery for consistent progress and injury prevention."
    },
    {
      title: "Foundation Strength",
      category: "Strength",
      level: "Beginner",
      duration: "8 weeks",
      description: "Build a solid foundation with proper form and progressive overload."
    }
  ];

  const filteredCourses = selectedCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Elite Training <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive programs designed by world-class coaches and athletes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center items-center">
          <Filter className="w-5 h-5 text-muted-foreground" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-muted-foreground">
                    {course.duration}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  <span className="text-primary font-medium">{course.level}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  View Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
