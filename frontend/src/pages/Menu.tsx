import Banner from 'components/Banner';

const Menu = () => {
  console.log('rendering Menu...');
  return (
    <div className="flex flex-col h-lvh">
      <Banner />
      <div className="bg-slate-200 grow"></div>
    </div>
  );
};

export default Menu;
