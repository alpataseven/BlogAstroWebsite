const StaffPickItem = ({ author, title, date }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-1">
        <img src="/yazar-avatar-yolu.png" alt={author} className="w-5 h-5 rounded-full mr-2" /> {/* Gerçek avatar görseliyle değiştirin */}
        <span className="text-sm font-semibold text-gray-700">{author}</span>
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">
        {title}
      </h3>
      <span className="text-xs text-gray-500">{date}</span>
    </div>
  );
};

export default StaffPickItem;