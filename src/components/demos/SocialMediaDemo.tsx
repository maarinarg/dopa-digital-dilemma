
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, MessageCircle, Repeat, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

interface SocialMediaDemoProps {
  setActiveDemoId: (id: string) => void;
}

const SocialMediaDemo = ({ setActiveDemoId }: SocialMediaDemoProps) => {
  const [scrollCount, setScrollCount] = useState(0);
  const [posts, setPosts] = useState([
    { id: 1, liked: false, likes: 243, shares: 12, comments: 8 },
    { id: 2, liked: false, likes: 157, shares: 5, comments: 3 },
    { id: 3, liked: false, likes: 362, shares: 28, comments: 14 }
  ]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  // Simular scroll infinito
  const handleLoadMore = () => {
    setScrollCount(prev => prev + 1);
    setNotificationCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    
    const newPosts = [
      { id: posts.length + 1, liked: false, likes: Math.floor(Math.random() * 500), 
        shares: Math.floor(Math.random() * 50), comments: Math.floor(Math.random() * 30) },
      { id: posts.length + 2, liked: false, likes: Math.floor(Math.random() * 500), 
        shares: Math.floor(Math.random() * 50), comments: Math.floor(Math.random() * 30) }
    ];
    
    setPosts([...posts, ...newPosts]);
    
    // Mostrar la explicación después de varios scrolls
    if (scrollCount >= 2 && !showExplanation) {
      setTimeout(() => setShowExplanation(true), 500);
    }

    if (scrollCount === 4) {
      toast({
        title: "¡Dopamina liberada!",
        description: "Acabas de experimentar un ciclo de recompensa diseñado para mantenerte scrolleando",
        variant: "default",
      });
    }
  };

  // Simular like
  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { 
          ...post, 
          liked: !post.liked, 
          likes: post.liked ? post.likes - 1 : post.likes + 1 
        };
      }
      return post;
    }));

    if (notificationCount < 5) {
      setTimeout(() => {
        setNotificationCount(prev => prev + 1);
      }, 3000);
    }
  };

  return (
    <Card className="overflow-hidden h-full">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-400 text-white">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">FeedLoop</h3>
          {notificationCount > 0 && (
            <Badge className="bg-red-500">{notificationCount}</Badge>
          )}
        </div>
        <p className="text-sm opacity-90">Scroll infinito y recompensas dopamínicas</p>
      </CardHeader>

      <CardContent className="p-4 max-h-[350px] overflow-y-auto">
        {posts.map((post) => (
          <div key={post.id} className="mb-4 p-3 bg-accent rounded-md">
            <p className="text-sm mb-2">Post #{post.id} - Contenido personalizado para ti</p>
            <div className="flex justify-between items-center mt-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className={post.liked ? "text-red-500" : ""}
                onClick={() => handleLike(post.id)}
              >
                <Heart className={`h-4 w-4 mr-1 ${post.liked ? "fill-current" : ""}`} /> {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-4 w-4 mr-1" /> {post.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <Repeat className="h-4 w-4 mr-1" /> {post.shares}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        <Button 
          variant="outline" 
          className="w-full mt-2" 
          onClick={handleLoadMore}
        >
          Cargar más
        </Button>
      </CardContent>

      {showExplanation && (
        <CardFooter className="bg-destructive/10 p-3 text-xs">
          <p>
            <strong>Técnica persuasiva:</strong> El scroll infinito y las notificaciones constantes 
            están diseñados para liberar dopamina y crear una adicción a la plataforma.
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default SocialMediaDemo;
