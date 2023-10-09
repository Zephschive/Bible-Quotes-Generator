document.getElementById('quotes').innerHTML = "In the beginning, God created the heavens and the earth.";
document.getElementById('verses').innerHTML = "Genesis 1:1"
const verses = 
{
    "Genesis 1:1": "In the beginning, God created the heavens and the earth.",
    "Psalm 23:1": "The Lord is my shepherd; I shall not want.",
    "Proverbs 3:5": "Trust in the Lord with all your heart, and do not lean on your own understanding.",
    "Isaiah 40:31": "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    "John 3:16": "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
    "Romans 8:28": "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    "1 Corinthians 13:4": "Love is patient and kind; love does not envy or boast; it is not arrogant or rude.",
    "Matthew 28:19-20": "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.",
    "Ephesians 2:8-9": "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
    "Philippians 4:13": "I can do all things through him who strengthens me.",
    "Colossians 3:23": "Whatever you do, work heartily, as for the Lord and not for men.",
    "James 1:5": "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.",
    "1 Peter 5:7": "Casting all your anxieties on him, because he cares for you.",
    "Revelation 22:13": "I am the Alpha and the Omega, the first and the last, the beginning and the end.",
    "Matthew 11:28": "Come to me, all who labor and are heavy laden, and I will give you rest.",
    "John 14:6": "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'",
    "Romans 12:2": "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.",
    "Psalm 119:105": "Your word is a lamp to my feet and a light to my path.",
    "2 Timothy 3:16-17": "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.",
    "Jeremiah 29:11": "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    "Luke 6:31": "And as you wish that others would do to you, do so to them.",
    "Hebrews 11:1": "Now faith is the assurance of things hoped for, the conviction of things not seen.",
    "1 John 4:7": "Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God.",
    "Galatians 5:22-23": "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.",
    "Psalm 46:10": "Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!",
    "Isaiah 53:5": "But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed."
 }
 document.getElementById('gen').addEventListener('click',() => {
    let authors= Object.keys(verses);
    let author = authors[Math.floor(Math.random() *authors.length)];
    let quote = verses[author];

    document.getElementById('quotes').innerHTML = quote;
    document.getElementById('verses').innerHTML = author
 });
  