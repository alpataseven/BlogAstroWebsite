const Header = () => {
  const navItems = [
    { name: 'For you', href: '#' },
    { name: 'Following', href: '#' },
    { name: 'Featured', href: '#', new: true }, // 'new' etiketi için
    { name: 'Technology', href: '#' },
    { name: 'React', href: '#' },
    { name: 'JavaScript', href: '#' },
    { name: 'Software', href: '#' },
  ];

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex space-x-6">
        <a href="#" className="font-bold text-lg">Sitenizin Logosu</a> {/* Kendi logonuzu/site adınızı koyun */}
        <nav className="flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 flex items-center"
            >
              {item.name}
              {item.new && (
                <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                  New
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>
      {/* Başlığın sağ tarafı - örneğin, kullanıcı avatarı, arama simgesi */}
      <div>
        {/* Buraya kullanıcı avatarı/giriş alanı ekleyebilirsiniz */}
      </div>
    </header>
  );
};

export default Header;