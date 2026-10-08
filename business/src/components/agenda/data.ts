// Een werkweek met Kees, als agenda. Per dag: de afspraken op de linkerpagina
// en het bericht van Kees dat op de rechterpagina geplakt wordt.
export type Afspraak = { tijd: string; wat: string; kees?: boolean };
export type Optie = { titel: string; meta: string; partner?: boolean };

export type Dag = {
  dag: string;
  kort: string;
  datum: string;
  tab: string;
  tabTekst: string;
  agenda: Afspraak[];
  tijd: string;
  tekst: string;
  knoppen: string[];
  status: string;
  bedrag: number;
  opties?: Optie[];
};

export const dagen: Dag[] = [
  {
    dag: 'Maandag',
    kort: 'Ma',
    datum: '12 oktober',
    tab: 'var(--hemel-zacht)',
    tabTekst: 'var(--nacht)',
    agenda: [
      { tijd: '8:30', wat: 'Lisa begint', kees: true },
      { tijd: '10:00', wat: 'Rondleiding met Lisa' },
      { tijd: '12:30', wat: 'Lunch met het team' },
      { tijd: '16:00', wat: 'Offerte Jansen Bouw' },
    ],
    tijd: '8:30',
    tekst: 'Nieuwe collega Lisa begint. Sleutel, pas en laptop liggen klaar, het welkomstpakket staat op haar bureau.',
    knoppen: ['Top'],
    status: 'Lisa is binnen. Alles lag klaar.',
    bedrag: 0,
  },
  {
    dag: 'Dinsdag',
    kort: 'Di',
    datum: '13 oktober',
    tab: 'var(--hemel)',
    tabTekst: 'var(--nacht)',
    agenda: [
      { tijd: '9:15', wat: 'Taart voor Sanne', kees: true },
      { tijd: '11:00', wat: 'Sales-overleg' },
      { tijd: '14:30', wat: 'Accountant bellen' },
    ],
    tijd: '9:15',
    tekst: 'Sanne is morgen jarig. Zal ik taart laten bezorgen om 10:00? Kosten €32 uit het kantoorbudget.',
    knoppen: ['Akkoord', 'Iets anders'],
    status: 'Taart besteld voor woensdag 10:00.',
    bedrag: 32,
  },
  {
    dag: 'Woensdag',
    kort: 'Wo',
    datum: '14 oktober',
    tab: 'color-mix(in srgb, var(--indigo) 55%, var(--hemel))',
    tabTekst: 'var(--wit)',
    agenda: [
      { tijd: '10:00', wat: 'Taart voor Sanne' },
      { tijd: '14:00', wat: 'Van Dijk in zaal 2', kees: true },
      { tijd: '16:00', wat: 'Weekplanning' },
    ],
    tijd: '8:00',
    tekst: 'Klant Van Dijk komt om 14:00. Zaal 2 is geboekt, koffie en lunch voor 4 staan klaar.',
    knoppen: ['Top'],
    status: 'Lunch voor 4 kost €56 uit het kantoorbudget.',
    bedrag: 56,
  },
  {
    dag: 'Donderdag',
    kort: 'Do',
    datum: '15 oktober',
    tab: 'var(--indigo)',
    tabTekst: 'var(--wit)',
    agenda: [
      { tijd: '9:00', wat: 'Teamoverleg' },
      { tijd: '11:00', wat: 'Lease van de bus', kees: true },
      { tijd: '15:00', wat: 'Sollicitatiegesprek' },
    ],
    tijd: '11:40',
    tekst: 'Het leasecontract van de bus loopt over twee maanden af. Ik heb drie voorstellen klaargezet.',
    knoppen: ['Bekijk'],
    status: 'De voorstellen staan naast elkaar.',
    bedrag: 0,
    opties: [
      { titel: 'Elektrische bus', meta: '48 mnd · €589', partner: true },
      { titel: 'Hybride bus', meta: '48 mnd · €542' },
      { titel: 'Huidige bus verlengen', meta: '12 mnd · €455' },
    ],
  },
  {
    dag: 'Vrijdag',
    kort: 'Vr',
    datum: '16 oktober',
    tab: 'var(--nacht)',
    tabTekst: 'var(--wit)',
    agenda: [
      { tijd: '10:00', wat: 'Klant Jansen belt' },
      { tijd: '13:00', wat: 'Weekafsluiting' },
      { tijd: '16:30', wat: 'Borrel', kees: true },
    ],
    tijd: '15:00',
    tekst: 'Borrel om 16:30. Bitterballen en drankjes zijn besteld, 9 van de 12 collega’s komen.',
    knoppen: ['Klaar is Kees'],
    status: 'De borrel staat klaar. €140 uit het kantoorbudget.',
    bedrag: 140,
  },
];

// De tijdlijn op de linkerpagina loopt van 8:00 tot 17:00
export const UREN = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

export function positie(tijd: string) {
  const [u, m = '0'] = tijd.split(':');
  return Number(u) - 8 + Number(m) / 60;
}
