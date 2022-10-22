export default function ResultsItem({ data: {time, pagesCount} }) {
  
	const date = time.slice(0, 10);
   const timeUpdate = time.slice(11, 16);
   
	return (
		<li>
			<p>{date}</p>
			<p>{timeUpdate}</p>
			<p>
				{pagesCount} <span> pages</span>
			</p>
		</li>
	);
}
