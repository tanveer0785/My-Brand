const AppCohai = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="bg-linear-to-r from-purple-600 to-indigo-600 text-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold">App Cohai Dashboard</h2>
        <p className="mt-2 opacity-90">Manage your integrated applications and data here.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 bg-white border rounded-xl shadow-sm">
          <h3 className="font-bold text-xl">Analytics</h3>
          <p className="text-gray-500 mt-2">Track your daily performance.</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default AppCohai;