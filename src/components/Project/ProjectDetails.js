import React from 'react';

const ProjectDetails = () => {
	return (
		<>
			<div class='details'>
				<ul class='form'>
					<li>
						<label>Project name:</label>
						<input type='text' class='in-text' />
					</li>
					<li>
						<label>Lead:</label>
						<select>
							<option>Select lead</option>
							<option>Sasa Popovic</option>
							<option>Sladjana Miljanovic</option>
						</select>
					</li>
				</ul>
				<ul class='form'>
					<li>
						<label>Description:</label>
						<input type='text' class='in-text' />
					</li>
				</ul>
				<ul class='form last'>
					<li>
						<label>Customer:</label>
						<select>
							<option>Select customer</option>
							<option>Adam Software NV</option>
							<option>Clockwork</option>
							<option>Emperor Design</option>
						</select>
					</li>
					<li class='inline'>
						<label>Status:</label>
						<span class='radio'>
							<label for='inactive'>Active:</label>
							<input type='radio' value='1' name='status' id='inactive' />
						</span>
						<span class='radio'>
							<label for='active'>Inactive:</label>
							<input type='radio' value='2' name='status' id='active' />
						</span>
						<span class='radio'>
							<label for='active'>Archive:</label>
							<input type='radio' value='3' name='status' id='active' />
						</span>
					</li>
				</ul>
				<div class='buttons'>
					<div class='inner'>
						<a href='javascript:;' class='btn green'>
							Save
						</a>
						<a href='javascript:;' class='btn red'>
							Delete
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectDetails;
