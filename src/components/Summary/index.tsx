import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import totalSvg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>

        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>

        <strong>- R$500,00</strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="Total" />
        </header>

        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}