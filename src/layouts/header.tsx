import { Header } from '../components/header';

type Props = {
  children: React.ReactNode;
};

export const HeaderLayout = ({ children }: Props) => {
  return (
    <div className="m-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="mb-8">
          <Header />
        </div>
        {children}
      </div>
    </div>
  );
};
