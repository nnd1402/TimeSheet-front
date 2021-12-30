import React from 'react';
import CalendarTable from '../../components/Shared/CalendarTable';

const TimeSheetPage = () => {
	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>TimeSheet</h2>
				<div class='grey-box-wrap'>
					<div class='top'>
						<a href='javascript:;' class='prev'>
							<i class='zmdi zmdi-chevron-left'></i>previous month
						</a>
						<span class='center'>February, 2013</span>
						<a href='javascript:;' class='next'>
							next month<i class='zmdi zmdi-chevron-right'></i>
						</a>
					</div>
					<div class='bottom'></div>
				</div>
				<CalendarTable />
				<div class='total'>
					<span>
						Total hours: <em>90</em>
					</span>
				</div>
				{/* <ProjectModal open={isOpen} onClose={() => setIsOpen(false)} />
				{isOpen && <Backdrop close={() => setIsOpen(false)} />} */}
			</section>
		</div>
	);
};

export default TimeSheetPage;
