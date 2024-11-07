import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({input}) {
    
    const calculatedResult = calculateInvestmentResults(input)
    const initialInvestment = 
        calculatedResult[0].valueEndOfYear -
        calculatedResult[0].interest -
        calculatedResult[0].annualInvestment;
        
    return (
        <>        
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Annual Investment</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                    
                </tr>
            </thead>
            <tbody>
                {calculatedResult.map(item => {
                    const totalInterest = 
                        item.valueEndOfYear - 
                        item.annualInvestment * item.year -
                        initialInvestment;
                    
                    const totalAmountInvested = item.valueEndOfYear - totalInterest;

                    return <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.annualInvestment)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
        </>

    )
}