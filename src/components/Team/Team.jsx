import { Section } from 'components/Common/Common.styled';
import {
	Container,
	List,
	ItemCard,
	Thumb,
	Photo,
	Wrap,
	Text,
	GitLink,
	Button,
} from './Team.styled';
import { useNavigate } from 'react-router-dom';
import { team } from './TeamDB';

import useTranslation from 'Hooks/useTranslations';

const TeamPage = () => {
	const navigate = useNavigate();
	const translation = useTranslation();

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
						<GitLink href={gitLink}>GitHub link</GitLink>
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
				<Button type="button" onClick={() => navigate(-1)}>
					{translation.team.teamButton}
				</Button>
			</Container>
		</Section>
	);
};

export default TeamPage;
