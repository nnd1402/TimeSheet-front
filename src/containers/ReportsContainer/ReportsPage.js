import React from 'react';

const ReportsPage = () => {
	return (
		<div class='wrapper'>
			<section class='content'>
				<h2>
					<i class='ico report'></i>Reports
				</h2>
				<div class='grey-box-wrap reports'>
					<ul class='form'>
						<li>
							<label>Team member:</label>
							<select>
								<option>All</option>
							</select>
						</li>
						<li>
							<label>Category:</label>
							<select>
								<option>All</option>
							</select>
						</li>
					</ul>
					<ul class='form'>
						<li>
							<label>Client:</label>
							<select>
								<option>All</option>
							</select>
						</li>
						<li>
							<label>Start date:</label>
							<input type='text' class='in-text datepicker' />
						</li>
					</ul>
					<ul class='form last'>
						<li>
							<label>Project:</label>
							<select>
								<option>All</option>
							</select>
						</li>
						<li>
							<label>End date:</label>
							<input type='text' class='in-text datepicker' />
						</li>
						<li>
							<a href='javascript:;' class='btn orange right'>
								Reset
							</a>
							<a href='javascript:;' class='btn green right'>
								Search
							</a>
						</li>
					</ul>
				</div>
				<table class='default-table'>
					<tr>
						<th>Date</th>
						<th>Team member</th>
						<th>Projects</th>
						<th>Categories</th>
						<th>Description</th>
						<th class='small'>Time</th>
					</tr>
					<tr>
						<td>2013-02-13</td>
						<td>Slađana Miljanovic</td>
						<td>Seachange - Nitro</td>
						<td>Front-End Development</td>
						<td>Lorem ipsum dolor sit amet</td>
						<td class='small'>7.5</td>
					</tr>
					<tr>
						<td>2013-02-13</td>
						<td>Sladjana Miljanovic</td>
						<td>Seachange - Nitro</td>
						<td>Front-End Development</td>
						<td>Lorem ipsum dolor sit amet</td>
						<td class='small'>7.5</td>
					</tr>
					<tr>
						<td>2013-02-13</td>
						<td>Sladjana Miljanovic</td>
						<td>Seachange - Nitro</td>
						<td>Front-End Development</td>
						<td>Lorem ipsum dolor sit amet</td>
						<td class='small'>7.5</td>
					</tr>
				</table>
				<div class='total'>
					<span>
						Report total: <em>7.5</em>
					</span>
				</div>
				<div class='grey-box-wrap reports'>
					<div class='btns-inner'>
						<a href='javascript:;' class='btn white'>
							<span>Print report</span>
						</a>
						<a href='javascript:;' class='btn white'>
							<span>Create PDF</span>
						</a>
						<a href='javascript:;' class='btn white'>
							<span>Export to excel</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ReportsPage;
