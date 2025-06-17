import { FaSync } from "react-icons/fa";

export default function SyncStatusBar() {
  return (
    <div className="status-bar text-white text-center py-2 text-sm flex items-center justify-center gap-2">
      <FaSync className="animate-spin" />
      <span>Sincronizado - Última atualização: 14:32</span>
    </div>
  );
}
