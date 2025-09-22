import { InputGroup } from '@/components/ui';
import { IconButton, Input } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const SearchInput = () => {
	return (
		<>
			<IconButton
				hideFrom="md"
				size="sm"
				variant={{ base: 'subtle', _dark: 'surface' }}
				rounded="full"
			>
				<FiSearch />
			</IconButton>

			<InputGroup
				hideBelow="md"
				startElement={<FiSearch />}
			>
				<Input
					size="sm"
					rounded="md"
					type="search"
					placeholder="Cari di Qalmi"
					w={{ md: 'xs', lg: 'md' }}
					bg={{ _dark: 'gray.900' }}
				/>
			</InputGroup>
		</>
	);
};

export default SearchInput;
