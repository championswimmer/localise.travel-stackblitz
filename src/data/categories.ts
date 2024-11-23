import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'travel',
    name: 'Travel',
    iconName: 'Plane',
    subcategories: [
      {
        id: 'air',
        name: 'Air Travel',
        iconName: 'PlaneTakeoff',
        words: [
          {
            english: 'departure',
            translations: {
              fr: 'départ',
              es: 'salida',
              de: 'Abflug',
              hi: 'प्रस्थान',
              kn: 'nigamana',
            },
          },
          {
            english: 'arrival',
            translations: {
              fr: 'arrivée',
              es: 'llegada',
              de: 'Ankunft',
              hi: 'आगमन',
              kn: 'aagama',
            },
          },
          {
            english: 'flight',
            translations: { fr: 'vol', es: 'vuelo', de: 'Flug', hi: 'उड़ान', kn: 'vimaana' },
          },
          {
            english: 'boarding pass',
            translations: {
              fr: "carte d'embarquement",
              es: 'tarjeta de embarque',
              de: 'Bordkarte',
              hi: 'बोर्डिंग पास',
              kn: 'boarding pass',
            },
          },
          {
            english: 'gate',
            translations: { fr: 'porte', es: 'puerta', de: 'Gate', hi: 'गेट', kn: 'gate' },
          },
          {
            english: 'terminal',
            translations: {
              fr: 'terminal',
              es: 'terminal',
              de: 'Terminal',
              hi: 'टर्मिनल',
              kn: 'terminal',
            },
          },
        ],
        phrases: [
          {
            english: 'Where is my gate?',
            translations: {
              fr: 'Où est ma porte?',
              es: '¿Dónde está mi puerta?',
              de: 'Wo ist mein Gate?',
              hi: 'मेरा गेट कहाँ है?',
              kn: 'nanna gate ellide?',
            },
          },
          {
            english: 'Is my flight delayed?',
            translations: {
              fr: 'Mon vol est-il retardé?',
              es: '¿Mi vuelo está retrasado?',
              de: 'Hat mein Flug Verspätung?',
              hi: 'क्या मेरी फ्लाइट देरी से है?',
              kn: 'nanna vimaana vilambavaagideve?',
            },
          },
          {
            english: 'I need to check in',
            translations: {
              fr: "Je dois m'enregistrer",
              es: 'Necesito hacer el check-in',
              de: 'Ich muss einchecken',
              hi: 'मुझे चेक-इन करना है',
              kn: 'nannu check-in maadbeku',
            },
          },
        ],
      },
      {
        id: 'road',
        name: 'Road Travel',
        iconName: 'Car',
        words: [
          {
            english: 'taxi',
            translations: { fr: 'taxi', es: 'taxi', de: 'Taxi', hi: 'टैक्सी', kn: 'taxi' },
          },
          {
            english: 'bus',
            translations: { fr: 'bus', es: 'autobús', de: 'Bus', hi: 'बस', kn: 'bus' },
          },
          {
            english: 'bus stop',
            translations: {
              fr: 'arrêt de bus',
              es: 'parada de autobús',
              de: 'Bushaltestelle',
              hi: 'बस स्टॉप',
              kn: 'bus nildana',
            },
          },
          {
            english: 'driver',
            translations: {
              fr: 'chauffeur',
              es: 'conductor',
              de: 'Fahrer',
              hi: 'चालक',
              kn: 'chalaka',
            },
          },
        ],
        phrases: [
          {
            english: 'How much is the fare?',
            translations: {
              fr: 'Combien coûte le trajet?',
              es: '¿Cuánto cuesta el viaje?',
              de: 'Wie viel kostet die Fahrt?',
              hi: 'किराया कितना है?',
              kn: 'prayana dara eshtu?',
            },
          },
          {
            english: 'Please take me to...',
            translations: {
              fr: 'Emmenez-moi à...',
              es: 'Lléveme a...',
              de: 'Bringen Sie mich bitte zu...',
              hi: 'कृपया मुझे... ले चलें',
              kn: 'dayavittu nannannu... ge karedoyiri',
            },
          },
        ],
      },
      {
        id: 'train',
        name: 'Train Travel',
        iconName: 'Train',
        words: [
          {
            english: 'platform',
            translations: {
              fr: 'quai',
              es: 'andén',
              de: 'Bahnsteig',
              hi: 'प्लेटफॉर्म',
              kn: 'platform',
            },
          },
          {
            english: 'ticket',
            translations: {
              fr: 'billet',
              es: 'billete',
              de: 'Fahrkarte',
              hi: 'टिकट',
              kn: 'ticket',
            },
          },
          {
            english: 'station',
            translations: {
              fr: 'gare',
              es: 'estación',
              de: 'Bahnhof',
              hi: 'स्टेशन',
              kn: 'station',
            },
          },
          {
            english: 'seat',
            translations: {
              fr: 'siège',
              es: 'asiento',
              de: 'Sitzplatz',
              hi: 'सीट',
              kn: 'seat',
            },
          },
        ],
        phrases: [
          {
            english: 'Which platform for...?',
            translations: {
              fr: 'Quel quai pour...?',
              es: '¿Qué andén para...?',
              de: 'Welcher Bahnsteig für...?',
              hi: 'किस प्लेटफॉर्म से...?',
              kn: '...ge yava platform?',
            },
          },
          {
            english: 'Is this seat taken?',
            translations: {
              fr: 'Cette place est-elle prise?',
              es: '¿Está ocupado este asiento?',
              de: 'Ist dieser Platz besetzt?',
              hi: 'क्या यह सीट खाली है?',
              kn: 'ee seat togidedeya?',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'places',
    name: 'Places',
    iconName: 'Building2',
    subcategories: [
      {
        id: 'hotel',
        name: 'Hotel',
        iconName: 'Hotel',
        words: [
          {
            english: 'room',
            translations: {
              fr: 'chambre',
              es: 'habitación',
              de: 'Zimmer',
              hi: 'कमरा',
              kn: 'kamaara',
            },
          },
          {
            english: 'key',
            translations: {
              fr: 'clé',
              es: 'llave',
              de: 'Schlüssel',
              hi: 'चाबी',
              kn: 'chaabi',
            },
          },
          {
            english: 'reception',
            translations: {
              fr: 'réception',
              es: 'recepción',
              de: 'Rezeption',
              hi: 'रिसेप्शन',
              kn: 'reception',
            },
          },
          {
            english: 'elevator',
            translations: {
              fr: 'ascenseur',
              es: 'ascensor',
              de: 'Aufzug',
              hi: 'लिफ्ट',
              kn: 'lift',
            },
          },
        ],
        phrases: [
          {
            english: 'I have a reservation',
            translations: {
              fr: "J'ai une réservation",
              es: 'Tengo una reserva',
              de: 'Ich habe eine Reservierung',
              hi: 'मेरी बुकिंग है',
              kn: 'nanna booking ide',
            },
          },
          {
            english: 'Is breakfast included?',
            translations: {
              fr: 'Le petit-déjeuner est-il inclus?',
              es: '¿Está incluido el desayuno?',
              de: 'Ist Frühstück inklusive?',
              hi: 'क्या नाश्ता शामिल है?',
              kn: 'breakfast serisideya?',
            },
          },
        ],
      },
      {
        id: 'workplace',
        name: 'Workplace',
        iconName: 'Briefcase',
        words: [
          {
            english: 'desk',
            translations: {
              fr: 'bureau',
              es: 'escritorio',
              de: 'Schreibtisch',
              hi: 'डेस्क',
              kn: 'desk',
            },
          },
          {
            english: 'charger',
            translations: {
              fr: 'chargeur',
              es: 'cargador',
              de: 'Ladegerät',
              hi: 'चार्जर',
              kn: 'charger',
            },
          },
          {
            english: 'wifi',
            translations: { fr: 'wifi', es: 'wifi', de: 'WLAN', hi: 'वाईफाई', kn: 'wifi' },
          },
          {
            english: 'meeting room',
            translations: {
              fr: 'salle de réunion',
              es: 'sala de reuniones',
              de: 'Konferenzraum',
              hi: 'मीटिंग रूम',
              kn: 'meeting room',
            },
          },
        ],
        phrases: [
          {
            english: "What's the wifi password?",
            translations: {
              fr: 'Quel est le mot de passe wifi?',
              es: '¿Cuál es la contraseña del wifi?',
              de: 'Wie lautet das WLAN-Passwort?',
              hi: 'वाईफाई पासवर्ड क्या है?',
              kn: 'wifi password enu?',
            },
          },
          {
            english: 'Where can I plug in my laptop?',
            translations: {
              fr: 'Où puis-je brancher mon ordinateur portable?',
              es: '¿Dónde puedo enchufar mi portátil?',
              de: 'Wo kann ich meinen Laptop anschließen?',
              hi: 'मैं अपना लैपटॉप कहाँ प्लग कर सकता हूं?',
              kn: 'nanna laptop na elli plug maadabahudu?',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'food',
    name: 'Food',
    iconName: 'Utensils',
    subcategories: [
      {
        id: 'restaurant',
        name: 'Restaurant',
        iconName: 'UtensilsCrossed',
        words: [
          {
            english: 'menu',
            translations: {
              fr: 'menu',
              es: 'menú',
              de: 'Speisekarte',
              hi: 'मेन्यू',
              kn: 'menu',
            },
          },
          {
            english: 'waiter',
            translations: {
              fr: 'serveur',
              es: 'camarero',
              de: 'Kellner',
              hi: 'वेटर',
              kn: 'waiter',
            },
          },
          {
            english: 'bill',
            translations: {
              fr: 'addition',
              es: 'cuenta',
              de: 'Rechnung',
              hi: 'बिल',
              kn: 'bill',
            },
          },
          {
            english: 'table',
            translations: { fr: 'table', es: 'mesa', de: 'Tisch', hi: 'मेज़', kn: 'mej' },
          },
        ],
        phrases: [
          {
            english: 'A table for two, please',
            translations: {
              fr: "Une table pour deux, s'il vous plaît",
              es: 'Una mesa para dos, por favor',
              de: 'Einen Tisch für zwei, bitte',
              hi: 'दो लोगों के लिए एक टेबल, कृपया',
              kn: 'ibbaru janarige ondu table, dayavittu',
            },
          },
          {
            english: 'Could I see the menu?',
            translations: {
              fr: 'Puis-je voir le menu?',
              es: '¿Puedo ver el menú?',
              de: 'Könnte ich die Speisekarte sehen?',
              hi: 'क्या मैं मेन्यू देख सकता हूं?',
              kn: 'nanu menu nodabahuda?',
            },
          },
        ],
      },
      {
        id: 'cafe',
        name: 'Cafe',
        iconName: 'Coffee',
        words: [
          {
            english: 'coffee',
            translations: { fr: 'café', es: 'café', de: 'Kaffee', hi: 'कॉफ़ी', kn: 'coffee' },
          },
          {
            english: 'tea',
            translations: { fr: 'thé', es: 'té', de: 'Tee', hi: 'चाय', kn: 'chaa' },
          },
          {
            english: 'pastry',
            translations: {
              fr: 'pâtisserie',
              es: 'pastel',
              de: 'Gebäck',
              hi: 'पेस्ट्री',
              kn: 'pastry',
            },
          },
          {
            english: 'sugar',
            translations: {
              fr: 'sucre',
              es: 'azúcar',
              de: 'Zucker',
              hi: 'चीनी',
              kn: 'sakkare',
            },
          },
        ],
        phrases: [
          {
            english: 'One coffee, please',
            translations: {
              fr: "Un café, s'il vous plaît",
              es: 'Un café, por favor',
              de: 'Einen Kaffee, bitte',
              hi: 'एक कॉफ़ी, कृपया',
              kn: 'ondhu coffee, dayavittu',
            },
          },
          {
            english: 'Do you have soy milk?',
            translations: {
              fr: 'Avez-vous du lait de soja?',
              es: '¿Tienen leche de soja?',
              de: 'Haben Sie Sojamilch?',
              hi: 'क्या आपके पास सोया मिल्क है?',
              kn: 'nimma hattira soy milk ideya?',
            },
          },
        ],
      },
      {
        id: 'pub',
        name: 'Pub',
        iconName: 'Beer',
        words: [
          {
            english: 'beer',
            translations: {
              fr: 'bière',
              es: 'cerveza',
              de: 'Bier',
              hi: 'बीयर',
              kn: 'beer',
            },
          },
          {
            english: 'wine',
            translations: { fr: 'vin', es: 'vino', de: 'Wein', hi: 'वाइन', kn: 'wine' },
          },
          {
            english: 'menu',
            translations: {
              fr: 'carte',
              es: 'carta',
              de: 'Karte',
              hi: 'मेन्यू',
              kn: 'menu',
            },
          },
          {
            english: 'cheers',
            translations: {
              fr: 'santé',
              es: '¡salud!',
              de: 'Prost!',
              hi: 'चियर्स',
              kn: 'cheers',
            },
          },
        ],
        phrases: [
          {
            english: 'What beers do you have?',
            translations: {
              fr: 'Quelles bières avez-vous?',
              es: '¿Qué cervezas tienen?',
              de: 'Welche Biere haben Sie?',
              hi: 'आपके पास कौन सी बीयर है?',
              kn: 'nimma hattira yava beer ide?',
            },
          },
          {
            english: 'One more, please',
            translations: {
              fr: "Encore un, s'il vous plaît",
              es: 'Uno más, por favor',
              de: 'Noch eins, bitte',
              hi: 'एक और, कृपया',
              kn: 'ondhu inna, dayavittu',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'money',
    name: 'Money',
    iconName: 'Wallet',
    subcategories: [
      {
        id: 'card',
        name: 'Card Payments',
        iconName: 'CreditCard',
        words: [
          {
            english: 'credit card',
            translations: {
              fr: 'carte de crédit',
              es: 'tarjeta de crédito',
              de: 'Kreditkarte',
              hi: 'क्रेडिट कार्ड',
              kn: 'credit card',
            },
          },
          {
            english: 'debit card',
            translations: {
              fr: 'carte de débit',
              es: 'tarjeta de débito',
              de: 'Debitkarte',
              hi: 'डेबिट कार्ड',
              kn: 'debit card',
            },
          },
          {
            english: 'PIN',
            translations: { fr: 'code PIN', es: 'PIN', de: 'PIN', hi: 'पिन', kn: 'PIN' },
          },
          {
            english: 'contactless',
            translations: {
              fr: 'sans contact',
              es: 'sin contacto',
              de: 'kontaktlos',
              hi: 'कॉन्टैक्टलेस',
              kn: 'contactless',
            },
          },
          {
            english: 'chip',
            translations: { fr: 'puce', es: 'chip', de: 'Chip', hi: 'चिप', kn: 'chip' },
          },
          {
            english: 'swipe',
            translations: {
              fr: 'glisser',
              es: 'deslizar',
              de: 'durchziehen',
              hi: 'स्वाइप',
              kn: 'swipe',
            },
          },
          {
            english: 'terminal',
            translations: {
              fr: 'terminal',
              es: 'terminal',
              de: 'Terminal',
              hi: 'टर्मिनल',
              kn: 'terminal',
            },
          },
        ],
        phrases: [
          {
            english: 'Can I pay by card?',
            translations: {
              fr: 'Puis-je payer par carte?',
              es: '¿Puedo pagar con tarjeta?',
              de: 'Kann ich mit Karte zahlen?',
              hi: 'क्या मैं कार्ड से भुगतान कर सकता हूं?',
              kn: 'nanu cardinda kattabahuda?',
            },
          },
          {
            english: 'The card was declined',
            translations: {
              fr: 'La carte a été refusée',
              es: 'La tarjeta fue rechazada',
              de: 'Die Karte wurde abgelehnt',
              hi: 'कार्ड अस्वीकृत हो गया',
              kn: 'card tiraskruta aagide',
            },
          },
          {
            english: 'Please enter your PIN',
            translations: {
              fr: 'Veuillez saisir votre code PIN',
              es: 'Por favor, ingrese su PIN',
              de: 'Bitte geben Sie Ihre PIN ein',
              hi: 'कृपया अपना पिन डालें',
              kn: 'dayavittu nimma PIN enter maadi',
            },
          },
          {
            english: 'Tap your card here',
            translations: {
              fr: 'Tapez votre carte ici',
              es: 'Toque su tarjeta aquí',
              de: 'Karte hier auflegen',
              hi: 'अपना कार्ड यहां टैप करें',
              kn: 'nimma card illi tap maadi',
            },
          },
        ],
      },
      {
        id: 'cash',
        name: 'Cash Payments',
        iconName: 'Banknote',
        words: [
          {
            english: 'cash',
            translations: {
              fr: 'espèces',
              es: 'efectivo',
              de: 'Bargeld',
              hi: 'नकद',
              kn: 'nakadu',
            },
          },
          {
            english: 'change',
            translations: {
              fr: 'monnaie',
              es: 'cambio',
              de: 'Wechselgeld',
              hi: 'खुले पैसे',
              kn: 'badali haana',
            },
          },
          {
            english: 'coins',
            translations: {
              fr: 'pièces',
              es: 'monedas',
              de: 'Münzen',
              hi: 'सिक्के',
              kn: 'nane',
            },
          },
          {
            english: 'notes',
            translations: {
              fr: 'billets',
              es: 'billetes',
              de: 'Scheine',
              hi: 'नोट',
              kn: 'nota',
            },
          },
          {
            english: 'wallet',
            translations: {
              fr: 'portefeuille',
              es: 'cartera',
              de: 'Geldbörse',
              hi: 'बटुआ',
              kn: 'hundi',
            },
          },
        ],
        phrases: [
          {
            english: 'Do you have change?',
            translations: {
              fr: 'Avez-vous de la monnaie?',
              es: '¿Tiene cambio?',
              de: 'Haben Sie Wechselgeld?',
              hi: 'क्या आपके पास खुले पैसे हैं?',
              kn: 'nimma hatthira badali haana ideya?',
            },
          },
          {
            english: 'I only have cash',
            translations: {
              fr: "Je n'ai que des espèces",
              es: 'Solo tengo efectivo',
              de: 'Ich habe nur Bargeld',
              hi: 'मेरे पास सिर्फ नकद है',
              kn: 'nanna hatthira kevala nakadu ide',
            },
          },
          {
            english: 'Can you break this note?',
            translations: {
              fr: 'Pouvez-vous changer ce billet?',
              es: '¿Puede cambiar este billete?',
              de: 'Können Sie diesen Schein wechseln?',
              hi: 'क्या आप इस नोट को तोड़ सकते हैं?',
              kn: 'e nota badali maadbeka?',
            },
          },
        ],
      },
      {
        id: 'charges',
        name: 'Fees & Charges',
        iconName: 'Receipt',
        words: [
          {
            english: 'tip',
            translations: {
              fr: 'pourboire',
              es: 'propina',
              de: 'Trinkgeld',
              hi: 'टिप',
              kn: 'tip',
            },
          },
          {
            english: 'service charge',
            translations: {
              fr: 'frais de service',
              es: 'cargo por servicio',
              de: 'Servicegebühr',
              hi: 'सेवा शुल्क',
              kn: 'seve shulka',
            },
          },
          {
            english: 'surcharge',
            translations: {
              fr: 'supplément',
              es: 'recargo',
              de: 'Aufschlag',
              hi: 'अतिरिक्त शुल्क',
              kn: 'athirikta shulka',
            },
          },
          {
            english: 'tax',
            translations: {
              fr: 'taxe',
              es: 'impuesto',
              de: 'Steuer',
              hi: 'कर',
              kn: 'kara',
            },
          },
          {
            english: 'refund',
            translations: {
              fr: 'remboursement',
              es: 'reembolso',
              de: 'Rückerstattung',
              hi: 'धनवापसी',
              kn: 'dhanavapasi',
            },
          },
        ],
        phrases: [
          {
            english: 'Is service included?',
            translations: {
              fr: 'Le service est-il inclus?',
              es: '¿Está incluido el servicio?',
              de: 'Ist der Service inklusive?',
              hi: 'क्या सर्विस चार्ज शामिल है?',
              kn: 'seve serisideya?',
            },
          },
          {
            english: 'I would like a refund',
            translations: {
              fr: 'Je voudrais un remboursement',
              es: 'Quisiera un reembolso',
              de: 'Ich möchte eine Rückerstattung',
              hi: 'मुझे रिफंड चाहिए',
              kn: 'nange refund beku',
            },
          },
          {
            english: 'How much is the service charge?',
            translations: {
              fr: 'Combien sont les frais de service?',
              es: '¿Cuánto es el cargo por servicio?',
              de: 'Wie hoch ist die Servicegebühr?',
              hi: 'सर्विस चार्ज कितना है?',
              kn: 'seve shulka eshtu?',
            },
          },
        ],
      },
    ],
  },
];
