export default function UserInput({userInput, onChange}) {

	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="initial">
						Initial Investment
					</label>
					<input 
						id="initial" 
						type="number" required
						value={userInput.initialInvestment}
						onChange={(e) => onChange('initialInvestment', e.target.value)} 
					/>
				</p>
				<p>
					<label htmlFor="annual">
						Annual Investment
					</label>
					<input 
						id="annual" 
						type="number" required
						value={userInput.annualInvestment}
						onChange={(e) => onChange('annualInvestment', e.target.value)} 
					/>
				</p>
			</div>
				
			<div className="input-group">
				<p>
					<label htmlFor="expected_return">
						Expected Return
					</label>
					<input 
						id="expected" 
						type="number" required
						value={userInput.expectedReturn}
						onChange={(e) => onChange('expectedReturn', e.target.value)} 
					/>
				</p>
					
				<p>
					<label htmlFor="duration">
						Duration (Year)
					</label>
					<input 
						id="duration" 
						type="number" required
						value={userInput.duration}
						onChange={(e) => onChange('duration', e.target.value)} 
					/>
				</p>
			</div>
		
		</section>
	)
}