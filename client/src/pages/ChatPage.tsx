import { FaHeadset, FaUserTie, FaUsers, FaCircleQuestion, FaPhone } from "react-icons/fa6";

export default function ChatPage() {
  const chats = [
    {
      id: 1,
      name: "Suporte Técnico",
      message: "Como posso ajudar você hoje?",
      time: "Online",
      icon: FaHeadset,
      bgColor: "bg-accent",
      isOnline: true,
      unread: 0,
    },
    {
      id: 2,
      name: "Supervisor",
      message: "Boa tarde! Tarefa #4521 atualizada",
      time: "14:32",
      icon: FaUserTie,
      bgColor: "bg-primary",
      isOnline: false,
      unread: 1,
    },
    {
      id: 3,
      name: "Equipe Manutenção",
      message: "Reunião de equipe amanhã às 09:00",
      time: "Ontem",
      icon: FaUsers,
      bgColor: "bg-gray-400",
      isOnline: false,
      unread: 0,
    },
  ];

  return (
    <div className="h-full flex flex-col bg-muted/30">
      <div className="bg-card p-6 border-b border-border">
        <h1 className="text-xl font-semibold text-primary">Chat</h1>
        <p className="text-muted-foreground text-sm mt-1">Suporte e comunicação</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        {/* Chat List */}
        <div className="space-y-4 mb-8">
          {chats.map((chat) => {
            const Icon = chat.icon;
            return (
              <div
                key={chat.id}
                className="bg-card rounded-2xl p-4 shadow-sm border border-border flex items-center gap-4 cursor-pointer hover:bg-muted/50 transition-colors"
              >
                <div className={`w-12 h-12 ${chat.bgColor} rounded-full flex items-center justify-center relative`}>
                  <Icon className="text-white" />
                  {chat.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{chat.name}</h3>
                  <p className="text-sm text-muted-foreground">{chat.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{chat.time}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-medium">{chat.unread}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Quick Actions */}
        <div>
          <h3 className="font-semibold text-primary mb-4">Ações Rápidas</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-card rounded-xl p-4 text-center border border-border flex flex-col items-center gap-2 hover:bg-muted/50 transition-colors">
              <FaCircleQuestion className="text-accent text-xl" />
              <span className="text-sm font-medium">FAQ</span>
            </button>
            <button className="bg-card rounded-xl p-4 text-center border border-border flex flex-col items-center gap-2 hover:bg-muted/50 transition-colors">
              <FaPhone className="text-accent text-xl" />
              <span className="text-sm font-medium">Ligar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
