import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <main className="content-page">
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
}

export default App;
