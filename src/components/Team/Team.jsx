import { Section, Container } from 'components/Common/Common.styled';
import { List, ItemCard, Thumb, Photo, Wrap, Text, Link } from './Team.styled';
import { team } from './TeamDB';

const TeamPage = () => {
	const AllTeam = () =>
		team.map(({ id, name, gitLink, photo, position }) => {
			return (
				<ItemCard key={id}>
					<Thumb>
						<Photo src={photo} alt={name} />
					</Thumb>
					<Wrap>
						<Text>{name}</Text>
						<Text>{position}</Text>
						<Link href={gitLink}>GitHub link</Link>
					</Wrap>
				</ItemCard>
			);
		});
	return (
		<Section>
			<Container>
				<List>
					<AllTeam />
				</List>
			</Container>
		</Section>
	);
};

export default TeamPage;
