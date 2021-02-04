console.log("OK! JavaScript file has loaded successfully ...");
console.log("Script Running ...");
var journals = [
    {
        names: `W1. Jaikla, F. Khateb, M. Kumngern, T. Kulej, Rajeev Kumar Ranjan and P. Suwanjan`,
        title: `"0.5 V Fully Differential Universal Filter Based on Multiple Input OTAs"`,
        cat: `IEEE Access`,
        ref: ``,
        doi: `DOI: 10.1109/ACCESS.2020.3030239`,
        impact:`[Accepted]`
    },
    {
        names:`Pankaj Kumar Sharma, Rajeev Kumar Ranjan, F. Khateb and M. Kumngern`,
        title:`Charged Controlled Mem-Element Emulator and Its Application in a Chaotic System`,
        cat:`IEEE Access`,
        ref:`vol. 8, pp. 171397-171407, 2020`,
        doi:`DOI: 10.1109/ACCESS.2020.3024769`,
        impact:``
    },
    {
        names:`Pushkar Srivastava, R. K. Gupta, R. K. Sharma, and Rajeev Kumar Ranjan`,
        title:`MOS-Only Memristor Emulator`,
        cat:`Circuits, Systems, and Signal Processing`,
        ref:`Circuits, Systems, and Signal Processing, vol. 99, no. 1, 2020`,
        doi:`https://doi.org/10.1007/s00034-020-01421-x;`,
        impact:`Impact factor: 1.681`
    },
    {
        names:`Niranjan Raj, Rajeev Kumar Ranjan, and Fabian Khateb`,
        title:`Flux Controlled Memristor Emulator and its Experimental Results`,
        cat:`IEEE Transactions on Very Large Scale Integration (VLSI) Systems`,
        ref:`vol. 28, no. 4, pp. 1050 – 1061, 2020`,
        doi:`https://doi.org/10.1109/TVLSI.2020.2966292`,
        impact:`Impact factor: 1.946`
    },
    {
        names:`Vijay Kumar Verma, Rajeev Kumar Ranjan, V. Lekshmi, Ankit Kumar Azad, Bhargav Appasani, and Vijay Nath`,
        title:`A second generation current conveyor based PID controller optimized using a crossover improved genetic algorithm`,
        cat:`Microsystem Technologies`,
        ref:`vol. 26, pp. 1449–1454, 2020`,
        doi:`https://doi.org/10.1007/s00542-019-04677-9`,
        impact:`Impact factor: 1.737`
    },
    {
        names:`Fabian Khateb, Tomasz Kulej, Montree Kumngern, Winai Jaikla, and Rajeev Kumar Ranjan`,
        title:`Comparative performance study of multiple-input bulk-driven and multiple- input bulk-driven quasi-floating-gate DDCCs`,
        cat:`International Journal of Electronics and Communication (AEU),Elsevier`,
        ref:`vol. 108, pp. 19-28, 2019`,
        doi:`https://doi.org/10.1016/j.aeue.2019.06.003`,
        impact:`Impact factor: 2.924`
    },
    {
        names:`Rajeev Kumar Ranjan, Sagar Surendra, Subrto Raushan, Nishtha Garg, Bharti Kumari, and Fabian Khateb`,
        title:`High frequency floating memristor emulator and its experimental resultsIET Circuits`,
        cat:`IET Circuits`,
        ref:`Devices & Systems, vol. 13, no. 3, pp. 292-302, 2019`,
        doi:`https://doi.org/10.1049/iet-cds.2018.5191`,
        impact:`Impact factor: 1.277`
    },
    {
        names:`Rajeev Kumar Ranjan, Pankaj Kumar Sharma, Sagar, Niranjan Raj, Bharti Kumari, and Fabian Khateb`,
        title:`Memristor Emulator Circuit Using Multiple-Output OTA and Its Experimental Results`,
        cat:`Journal of Circuits, Systems and Computers`,
        ref:`vol. 28, no. 10, pp. 1950166`,
        doi:`https://doi.org/10.1142/S0218126619501664`,
        impact:`Impact factor: 0.939`
    },
    {
        names:`Bhargav Appasani, Pallav Prince, Rajeev Kumar Ranjan, Nisha Gupta, and Vijay Kumar Verma`,
        title:`A Simple Multi-Band Metamaterial Absorber with Combined Polarization Sensitive and Polarization Insensitive Characteristics for Terahertz Applications`,
        cat:`Plasmonics`,
        ref:`vol. 14, no. 3, pp 737–742, June 2019`,
        doi:`https://doi.org/10.1007/s11468- 018-0852-x`,
        impact:`Impact factor: 2.926`
    },

    {
        names:`Pooja Gupta, Vijay Kumar Verma, Rajeev Kumar Ranjan, Bhargav Appasani, Bindu Priyadarshini, and Vijay Nath`,
        title:`A series expansion method aided design of current mode second-generation current conveyor based active control circuit`,
        cat:`Microsystem Technologies`,
        ref:`vol. 25, no. 6, pp 2323–2330, June 2019`,
        doi:`https://doi.org/10.1007/s00542-018-4117-6`,
        impact:`Impact factor: 1.513`
    },
    {
        names:`Prakhar Shrivastava, Sagar Surendra, Rajeev Kumar Ranjan, Abhishek Shrivastav, and Bindu Priyadarshini`,
        title:`PI, PD and PID Controllers Using Single DVCCTA`,
        cat:`Iranian Journal of Science and Technology`,
        ref:`Transactions of Electrical Engineering, vol. 43, pp. 673–685, Jan.2019`,
        doi:`https://doi.org/10.1007/s40998-019-00180-z`,
        impact:`Impact factor: 0.657`
    },
    {
        names:`. Pushkar Srivastava, Ravindra Kumar Sharma, and Rajeev Kumar Ranjan`,
        title:`On the realization of current-mode four-quadrant CMOS cuber`,
        cat:`Analog Integrated Circuits and Signal Processing`,
        ref:`vol. 99, no. 1, pp 47–61, April 2019`,
        doi:`https://doi.org/10.1007/s10470-018-1291-5`,
        impact:`Impact factor: 0.925`
    },
    {
        names:`Vijay Kumar Verma, Rajeev Kumar Ranjan, Pooja Gupta, and Bindu Priyadarshini`,
        title:`A series expansion method aided design of CCII controller for a TITO system`,
        cat:`Microsystem Technologies`,
        ref:`vol. 24, no. 9, pp 3843–3849, September 2018`,
        doi:`https://doi.org/10.1007/s00542-018-3869-3`,
        impact:`Impact factor: 1.737`
    },
    {
        names:`Rajeev Kumar Ranjan, and Sajal K. Paul`,
        title:`Self-generating square/triangular wave and pulse width modulator using a single MO-CCCDTA`,
        cat:`Analog Integrated Circuits and Signal Processing`,
        ref:`vol. 94, no. 1, pp. 177-193`,
        doi:`https://doi.org/10.1007/s10470-017- 1089-x`,
        impact:`Impact factor: 0.925`
    },
    {
        names:`. Rajeev Kumar Ranjan, Ankita Sinha, and Sajal K. Paul`,
        title:`A New Operational Transconductance Amplifier Based Pulse Width Modulator`,
        cat:`Proceedings of the National Academy of Sciences, India - Section A`,
        ref:`vol. 89, no. 1, pp 51–55, March 2019`,
        doi:`https://doi.org/10.1007/s40010-017-0390-5`,
        impact:`Impact factor: 0.921`
    },
    {
        names:`Rajeev Kumar Ranjan, Nidhi Bhuval, Niranjan Raj, and Fabian Khateb`,
        title:`Single DVCCTA based high frequency incremental/decremental memristor emulator and its application`,
        cat:`International Journal of Electronics and Communication (AEU), Elsevier`,
        ref:`vol. 82, pp. 177-192, December 2017`,
        doi:`https://doi.org/10.1016/j.aeue.2017.07.039`,
        impact:`Impact factor: 2.924`
    },

    {
        names:`Rajeev Kumar Ranjan, Kaushik Mazumdar, Ratandeep Pal, and Satish Chandra`,
        title:`Generation of square and triangular wave with independently controllable frequency and amplitude using OTAs only and its application in PWM`,
        cat:`Analog Integrated Circuit and Signal Processing. `,
        ref:`Springer, Vol. 91 pp. 1-13, 2017`,
        doi:`https://doi.org/10.1007/s10470- 017-0971-x`,
        impact:`Impact factor: 0.925`
    },
    {
        names:`Rajeev Kumar Ranjan, Nishtha Rani, Sajal k. Paul and Gaurav Kanyal`,
        title:`Single CCTA based high frequency floating and grounded type of incremental/decremental memristor emulator`,
        cat:`Microelectronics Journal, Elsevier`,
        ref:`vol. 60, pp. 119-128, 2017`,
        doi:`https://doi.org/10.1016/j.mejo.2016.12.004`,
        impact:`Impact factor: 1.405`
    },
    {
        names:`Kaushik Mazumdar, Rajeev Kumar Ranjan, Ravi Shankar, Bindu Priyadarshini, and Aniruddha Ghosal`,
        title:`Modern comparative approach for carrier transport in InAlN/AlN superlattice device with characteristics and modelling using nitride (14N,15N) isotopes`,
        cat:`Superlattices and Microstructures, Elsevier`,
        ref:`vol. 103, pp. 190-194, 2017`,
        doi:`https://doi.org/10.1016/j.spmi.2017.01.008`,
        impact:`Impact factor: 2.12`
    },
    {
        names:`Rajeev Kumar Ranjan, Chandan Kumar Choubey, Bal Chander Nagar, and Sajal K. Paul`,
        title:`Comb Filter for Elimination of Unwanted Power Line Interference in Biomedical Signal`,
        cat:`Journal of Circuits, Systems, and Computers (JCSC)`,
        ref:`vol. 25, no. 6, pp. 1650052-14, 2016`,
        doi:`https://doi.org/10.1142/S0218126616500523`,
        impact:`Impact factor: 1.363`
    },
    {
        names:`Kaushik Mazumdar, Rajeev Kumar Ranjan, Ravi Shankar, Ahna Sharan, Bindu Priyadarshini, Mainak Kundu, and Aniruddha Ghosal`,
        title:`Analysis of Electron Transport in AlGaN/GaN Superlattice HEMTs for Isotopes 14N and 15N`,
        cat:`Superlattices and Microstructures, Elsevier`,
        ref:`vol. 100, pp. 983-987, 2016`,
        doi:`https://doi.org/10.1016/j.spmi.2016.10.065`,
        impact:`Impact factor: 2.12`
    },

    {
        names:`Rajeev Kumar Ranjan, Kundan Kumar, Nishtha Rani, Sajal K. Paul, and Shyam Akashe`,
        title:`A Power Line Filter Circuit Design for Biomedical Applications`,
        cat:`Journal of Computational and Theoretical Nanoscience, American Scientific Publishers`,
        ref:`vol. 13, no. 5, pp. 3345-3351, 2016`,
        doi:`https://doi.org/10.1166/jctn.2016.4997`,
        impact:`Impact factor: 1.666`
    },
    {
        names:`Rajeev Kumar Ranjan, Surya Prasanna Yalla, Shubham Sorya, and Sajal K. Paul`,
        title:`Active Comb Filter using Operational Transconductance Amplifier`,
        cat:`Active and Passive Electronic Components, Hindawi`,
        ref:`vol. 2014, 6 pages`,
        doi:`https://doi.org/10.1155/2014/587932`,
        impact:`Impact factor: 0.72`
    },

    {
        names:`Mourina Ghosh, Sajal K. Paul, Rajeev Kumar Ranjan, and Ashish Ranjan`,
        title:`Third-order universal filter using single Operational Transresistance Amplifier`,
        cat:`Journal of Engineering, Hindawi`,
        ref:`vol. 2013, 6 pages`,
        doi:`https://doi.org/10.1155/2013/317296`,
        impact:``
    }
];

var conferences = [
    {
        names: `N. Raj, S. Chandra, B. Priyadarshani, and <b>Rajeev Kumar Ranjan</b>`,
        title: ` “Multiple output current-controlled current conveyor transconductance amplifier using BiCMOS for analog signal processing"`,
        details: `in 4th International Conference on Recent Advances in Information Technology (RAIT), 15-17 March 2018 Dhanbad, India, DOI: https://doi.org/10.1109/RAIT.2018.8388989`
    },
    {
        names:`Swati Kumari, Pallav Prince,Vijay Kumar Verma, Bhargav Appasani, and Rajeev Kumar Ranjan`,
        title:`GA Based Design of Current Conveyor PLD Controller for the Speed Control of BLDC Motor`,
        details:`in 4th International Conference on Computational Intelligence & Communication Technology (CICT-2018), 9-10 Feb. 2018, Ghaziabad, India, DOI: https://doi.org/10.1109/CIACT.2018.8480149`
    },
    {
        names:`Sheetal Tewary, Vijay Kumar Verma, Bhargav Appasani, Pooja Guptal, and Rajeev Kumar Ranjan`,
        title:`Design of CCII PID Controller for the Control of Glucose Blood Level Using GA`,
        details:`in 4th International Conference on Computational Intelligence & Communication Technology (CICT-2018), 9-10 Feb. 2018, Ghaziabad, India, DOI: https://doi.org/10.1109/CIACT.2018.8480402`
    },
    {
        names:`Vijay Kumar Verma, Bhargav Appasani, Pooja Gupta, and Rajeev Kumar Ranjan`,
        title:`GA based design of CCII PID controller for an inverted pendulum system`,
        details:`in IEEE International Conference on Power, Control, Signals and Instrumentation Engineering (ICPCSI-2017), 21-22 Sept. 2017, Chennai, India, DOI: 10.1109/ICPCSI.2017.8392212`
    },
    {
        names:`Pooja Gupta, Bhargav Appasani, Vijay Verma, and Rajeev Kumar Ranjan`,
        title:`PSO Based CCII PID Controller for a Continuous Stirred Tank Reactor System`,
        details:`in IEEE International Conference on Power, Control, Signals and Instrumentation Engineering (ICPCSI-2017), 21-22 Sept. 2017 Chennai, India, DOI: https://doi.org/10.1109/ICPCSI.2017.8392227`
    },
    {
        names:`Nishtha Rani, Rajeev Kumar Ranjan, Ratnadeep Pal, and Sajal K. Paul`,
        title:`Programmable And Electronically Tunable Voltage-Mode Universal Biquadratic Filter Based On Simple CMOS OTA`,
        details:`in Proceeding of IEEE International Conference on Devices, Circuits and Systems (ICDCS-2016), 3-5 March 2016, Coimbatore, India, DOI: https://doi.org/10.1109/ICDCSyst.2016.7570623`
    },
    {
        names:`Rajeev Kumar Ranjan, Y. S. Prasanna Kumar, S. Sorya, Sajal K. Paul`,
        title:`Efficient Active Filter for filtering of harmonics in biomedical signal`,
        details:`in International Conference. BEATS-2014, UIET, Chandigarh (India), February, 14-15`
    },
    {
        names:`Mourina Ghosh, Rajeev Kumar Ranjan, and Sajal K. Paul`,
        title:`Universal filter using OTRA`,
        details:`in Proceeding of IEEE, International Conference CODEC- 2012, December 17- 19, Kolkata, India, DOI: https://doi.org/10.1109/CODEC.2012.6509217`
    }
];


var jlist = document.getElementById("journals-list");
journals.forEach((journal, index) => {
    var j = document.createElement("li");
    j.innerHTML = `
    ${journal.names}<br>
    <b style="color:#363c4d">${journal.title}</b><br>
    <i style="color:#363c4d">${journal.cat}</i>; ${journal.ref}<br>
    <span style="color:#2974ff;">${journal.doi}</span><br>
    <i style="color:#eb4034">${journal.impact}</i>
    `;
    jlist.appendChild(j);
});

var clist = document.getElementById("conferences-list");
conferences.forEach((conference, index) => {
    var c = document.createElement("li");
    c.innerHTML = `
    ${conference.names}<br>
    <b style="color:#363c4d">${conference.title}</b><br>
    ${conference.details}
    `;
    clist.appendChild(c);
});

console.log("Script ended...")

