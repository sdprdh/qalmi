import { FaRegHandshake } from 'react-icons/fa';
import { FiAlertCircle, FiBook, FiEdit, FiHome } from 'react-icons/fi';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { RiCustomerService2Line } from 'react-icons/ri';

export const SIDEBAR_MENU = {
	menu: [
		{
			field: 'Beranda',
			href: '/',
			icon: FiHome,
		},
		{
			field: 'Buat Post',
			href: '/posts/create',
			icon: FiEdit,
		},
	],

	forum: [
		{ field: 'Kajian islami bandung dan sekitarnya', href: '/forum' },
		{ field: 'Tanya jawab seputar islam dan sedekah', href: '/forum' },
		{ field: 'Diskusi umum asdas  dsa cdsc sdcsdc', href: '/forum' },
		{ field: 'Konsultasi syariah', href: '/forum' },
		{ field: 'Taubat dan istighfar', href: '/forum' },
		{ field: 'Seputar haji dan umrah', href: '/forum' },
	],

	// qalmi
	qalmi: [
		{
			field: 'Tentang Qalmi',
			href: '/hc/about',
			icon: FiAlertCircle,
		},
		{
			field: 'Syarat & Ketentuan',
			href: '/hc/terms-and-conditions',
			icon: FiBook,
		},
		{
			field: 'Kebijakan Privasi',
			href: '/hc/privacy-policy',
			icon: MdOutlinePrivacyTip,
		},
		{
			field: 'Pusat Bantuan',
			href: '/hc',
			icon: FaRegHandshake,
		},
		{
			field: 'Hubungi Kami',
			href: '/hc/contact-us',
			icon: RiCustomerService2Line,
		},
	],
};
