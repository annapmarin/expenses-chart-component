import Logo from "./assets/img/logo.svg";
import Chart from "./components/Chart";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <div className="container__header">
            <div className="container__subheader">
              <p>My balance</p>
              <span className="container__title">$921.48</span>
            </div>
            <img className="container__logo" src={Logo} alt="" />
          </div>
          <div className="container__content">
            <h1 className="container__title">Spending - Last 7 days</h1>
            <div className="container__bars">
              <Chart />
            </div>
            <hr />
            <div className="container__stats">
              <p>Total this month</p>
              <div>
                <span className="container__total">$478.33</span>
                <div>
                  <span>+2.4%</span>
                  <p>from last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
