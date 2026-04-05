function ContextMenu({ x, y, onClose }) {
  React.useEffect(() => {
    const handleClick = () => onClose();
    const handleScroll = () => onClose();
    
    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [onClose]);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    onClose();
  };

  const handleReload = () => {
    window.location.reload();
    onClose();
  };

  const menuItems = [
    { label: '🔗 Copy Page URL', action: handleCopyUrl },
    { label: '↻ Reload Page', action: handleReload },
    { divider: true },
    { label: '💀 Accept the void', action: onClose },
  ];

  return (
    <div 
      className="context-menu" 
      style={{ left: x, top: y }}
      onClick={(e) => e.stopPropagation()}
    >
      {menuItems.map((item, index) => 
        item.divider ? (
          <div key={index} className="context-menu-divider" />
        ) : (
          <div 
            key={index} 
            className="context-menu-item"
            onClick={item.action}
          >
            {item.label}
          </div>
        )
      )}
    </div>
  );
}