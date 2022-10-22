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

import NikitaPhoto from '../../Assets/img/TeamPhoto/Nikita.jpg';
import RenatPhoto from '../../Assets/img/TeamPhoto/Renat.jpg';
import OlehPhoto from '../../Assets/img/TeamPhoto/Oleh.jpeg';
import TanyaPhoto from '../../Assets/img/TeamPhoto/Tanya.jpg';
import PavloPhoto from '../../Assets/img/TeamPhoto/Pavlo.jpeg';
import ValeriyaPhoto from '../../Assets/img/TeamPhoto/Valeriya.jpeg';
import MaxPhoto from '../../Assets/img/TeamPhoto/Max.jpeg';
import AnastasiiaPhoto from '../../Assets/img/TeamPhoto/Anastasiia.jpeg';
import useTranslation from 'Hooks/useTranslations';

const TeamPage = () => {
	const navigate = useNavigate();
	const translation = useTranslation();

	return (
		<Section>
			<Container>
				<List>
					<ItemCard key={1}>
						<Thumb>
							<Photo src={PavloPhoto} alt="fffff" />
						</Thumb>
						<Wrap>
							<Text>{translation.team.pavlo.name}</Text>
							<Text>{translation.team.pavlo.position}</Text>
							<GitLink href="https://github.com/Lluitiy">
								{translation.team.git}
							</GitLink>
						</Wrap>
					</ItemCard>
					<ItemCard key={2}>
						<Thumb>
							<Photo src={TanyaPhoto} alt="fffff" />
						</Thumb>
						<Wrap>
							<Text>{translation.team.tanya.name}</Text>
							<Text>{translation.team.tanya.position}</Text>
							<GitLink href="https://github.com/Reizlina">
								{translation.team.git}
							</GitLink>
						</Wrap>
					</ItemCard>
					<ItemCard key={3}>
						<Thumb>
							<Photo src={OlehPhoto} alt="fffff" />
						</Thumb>
						<Wrap>
							<Text>{translation.team.oleh.name}</Text>
							<Text>{translation.team.oleh.position}</Text>
							<GitLink href="https://github.com/OlehPoliakov">
								{translation.team.git}
							</GitLink>
						</Wrap>
					</ItemCard>
					<ItemCard key={4}>
						<Thumb>
							<Photo src={AnastasiiaPhoto} alt="fffff" />
						</Thumb>
						<Wrap>
							<Text>{translation.team.anastasiia.name}</Text>
							<Text>{translation.team.anastasiia.position}</Text>
							<GitLink href="https://github.com/Anastasiia-Svechnikova">
								{translation.team.git}
							</GitLink>
						</Wrap>
					</ItemCard>
					<ItemCard key={5}>
						<Thumb>
							<Photo src={MaxPhoto} alt="fffff" />
						</Thumb>
						<Wrap>
							<Text>{translation.team.maksym.name}</Text>
							<Text>{translation.team.maksym.position}</Text>
							<GitLink href="https://github.com/MaksShostak">
								{translation.team.git}
							</GitLink>
						</Wrap>
					</ItemCard>
					<ItemCard key={6}>
						<Thumb>
							<Photo src={ValeriyaPhoto} alt="fffff" />
						</Thumb>
						<Wrap>
							<Text>{translation.team.valeriya.name}</Text>
							<Text>{translation.team.valeriya.position}</Text>
							<GitLink href="https://github.com/vchumack">
								{translation.team.git}
							</GitLink>
						</Wrap>
					</ItemCard>
					<ItemCard key={7}>
						<Thumb>
							<Photo src={RenatPhoto} alt="fffff" />
						</Thumb>
						<Wrap>
							<Text>{translation.team.renat.name}</Text>
							<Text>{translation.team.renat.position}</Text>
							<GitLink href="https://github.com/Veliiev-Renat">
								{translation.team.git}
							</GitLink>
						</Wrap>
					</ItemCard>
					<ItemCard key={8}>
						<Thumb>
							<Photo src={NikitaPhoto} alt="fffff" />
						</Thumb>
						<Wrap>
							<Text>{translation.team.nikita.name}</Text>
							<Text>{translation.team.nikita.position}</Text>
							<GitLink href="https://github.com/NikHectro/">
								{translation.team.git}
							</GitLink>
						</Wrap>
					</ItemCard>
				</List>
				<Button type="button" onClick={() => navigate(-1)}>
					{translation.team.teamButton}
				</Button>
			</Container>
		</Section>
	);
};

export default TeamPage;
