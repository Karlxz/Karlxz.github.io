function openData(imagen){
    
    var carasMascRef = [
        //29 rostros masculinos
        "https://Karlxz.github.io/img/caras/masculino/J3_M1267.png",    //1
        "https://Karlxz.github.io/img/caras/masculino/J2_M0020.png",    //2
        "https://Karlxz.github.io/img/caras/masculino/J1_M0254.png",    //3
        "https://Karlxz.github.io/img/caras/masculino/I3_M1189.png",    //4
        "https://Karlxz.github.io/img/caras/masculino/I2_M0656.png",    //5
        "https://Karlxz.github.io/img/caras/masculino/I1_M0100.png",    //6
        "https://Karlxz.github.io/img/caras/masculino/H2_M1171.png",    //7
        "https://Karlxz.github.io/img/caras/masculino/H1_M0313.png",    //8
        "https://Karlxz.github.io/img/caras/masculino/G3_M1185.png",    //9
        "https://Karlxz.github.io/img/caras/masculino/G2_M0646.png",    //10
        "https://Karlxz.github.io/img/caras/masculino/G1_M0371.png",    //11
        "https://Karlxz.github.io/img/caras/masculino/F3_M1266.png",    //12
        "https://Karlxz.github.io/img/caras/masculino/F2_M1039.png",    //13
        "https://Karlxz.github.io/img/caras/masculino/F1_M1004.png",    //14
        "https://Karlxz.github.io/img/caras/masculino/E3_M0497.png",    //15
        "https://Karlxz.github.io/img/caras/masculino/E2_M0349.png",    //16
        "https://Karlxz.github.io/img/caras/masculino/E1_M0230.png",    //17
        "https://Karlxz.github.io/img/caras/masculino/D3_M0739.png",    //18
        "https://Karlxz.github.io/img/caras/masculino/D2_M0953.png",    //19
        "https://Karlxz.github.io/img/caras/masculino/D1_M0424.png",    //20
        "https://Karlxz.github.io/img/caras/masculino/C3_M1079.png",    //21
        "https://Karlxz.github.io/img/caras/masculino/C2_M0308.png",    //22
        "https://Karlxz.github.io/img/caras/masculino/C1_M0039.png",    //23
        "https://Karlxz.github.io/img/caras/masculino/B3_M0836.png",    //24
        "https://Karlxz.github.io/img/caras/masculino/B2_M0595.png",    //25
        "https://Karlxz.github.io/img/caras/masculino/B1_M0319.png",    //26
        "https://Karlxz.github.io/img/caras/masculino/A3_M0603.png",    //27
        "https://Karlxz.github.io/img/caras/masculino/A2_M0667.png",    //28
        "https://Karlxz.github.io/img/caras/masculino/A1_M0586.png",    //29
        
        //25 Rostros femeninos
        "https://Karlxz.github.io/img/caras/femenino/J3_F1222.png",    //1
        "https://Karlxz.github.io/img/caras/femenino/J2_F1145.png",    //2
        "https://Karlxz.github.io/img/caras/femenino/J1_F1135.png",    //3
        "https://Karlxz.github.io/img/caras/femenino/I3_F1257.png",    //4
        "https://Karlxz.github.io/img/caras/femenino/I2_F1209.png",    //5
        "https://Karlxz.github.io/img/caras/femenino/I1_F0832.png",    //6
        "https://Karlxz.github.io/img/caras/femenino/G3_F1240.png",    //7
        "https://Karlxz.github.io/img/caras/femenino/G2_F0216.png",    //8
        "https://Karlxz.github.io/img/caras/femenino/G1_F0066.png",    //9
        "https://Karlxz.github.io/img/caras/femenino/F3_F1212.png",    //10
        "https://Karlxz.github.io/img/caras/femenino/F2_F1133.png",    //11
        "https://Karlxz.github.io/img/caras/femenino/F1_F1037.png",    //12
        "https://Karlxz.github.io/img/caras/femenino/E1_F0886.png",    //13
        "https://Karlxz.github.io/img/caras/femenino/D3_F1134.png",    //14
        "https://Karlxz.github.io/img/caras/femenino/D2_F0654.png",    //15
        "https://Karlxz.github.io/img/caras/femenino/D1_F0548.png",    //16
        "https://Karlxz.github.io/img/caras/femenino/C3_F1453.png",    //27
        "https://Karlxz.github.io/img/caras/femenino/C2_F0524.png",    //18
        "https://Karlxz.github.io/img/caras/femenino/C1_F0087.png",    //19
        "https://Karlxz.github.io/img/caras/femenino/B3_F1127.png",    //20
        "https://Karlxz.github.io/img/caras/femenino/B2_F0752.png",    //21
        "https://Karlxz.github.io/img/caras/femenino/B1_F1362.png",    //22
        "https://Karlxz.github.io/img/caras/femenino/A3_F1213.png",    //23
        "https://Karlxz.github.io/img/caras/femenino/A2_F1066.png",    //24
        "https://Karlxz.github.io/img/caras/femenino/A1_F0195.png",    //25
        
        //Ojos masculinos
        "https://Karlxz.github.io/img/ojos/masculino/F4_M0123.png",    //1
        "https://Karlxz.github.io/img/ojos/masculino/F3_M0507.png",    //2
        "https://Karlxz.github.io/img/ojos/masculino/F2_M0065.png",    //3
        "https://Karlxz.github.io/img/ojos/masculino/F1_M0251.png",    //4
        "https://Karlxz.github.io/img/ojos/masculino/E7_M2731.png",    //5
        "https://Karlxz.github.io/img/ojos/masculino/E6_M2238.png",    //6
        "https://Karlxz.github.io/img/ojos/masculino/E5_M2694.png",    //7
        "https://Karlxz.github.io/img/ojos/masculino/E4_M1418.png",    //8
        "https://Karlxz.github.io/img/ojos/masculino/E3_M1290.png",    //9
        "https://Karlxz.github.io/img/ojos/masculino/E2_M1318.png",    //10
        "https://Karlxz.github.io/img/ojos/masculino/E1_M0269.png",    //11
        "https://Karlxz.github.io/img/ojos/masculino/D7_M1065.png",    //12
        "https://Karlxz.github.io/img/ojos/masculino/D6_M0280.png",    //13
        "https://Karlxz.github.io/img/ojos/masculino/D5_M2257.png",    //14
        "https://Karlxz.github.io/img/ojos/masculino/D4_M1407.png",    //15
        "https://Karlxz.github.io/img/ojos/masculino/D3_M0578.png",    //16
        "https://Karlxz.github.io/img/ojos/masculino/D2_M2546.png",    //17
        "https://Karlxz.github.io/img/ojos/masculino/D1_M0620.png",    //18
        "https://Karlxz.github.io/img/ojos/masculino/C7_M1299.png",    //19
        "https://Karlxz.github.io/img/ojos/masculino/C6_M0236.png",    //20
        "https://Karlxz.github.io/img/ojos/masculino/C5_M0754.png",    //21
        "https://Karlxz.github.io/img/ojos/masculino/C4_M2400.png",    //22
        "https://Karlxz.github.io/img/ojos/masculino/C3_M0323.png",    //23
        "https://Karlxz.github.io/img/ojos/masculino/C2_M0204.png",    //24
        "https://Karlxz.github.io/img/ojos/masculino/C1_M1021.png",    //25
        "https://Karlxz.github.io/img/ojos/masculino/B7_M0830.png",    //26
        "https://Karlxz.github.io/img/ojos/masculino/B6_M1046.png",    //27
        "https://Karlxz.github.io/img/ojos/masculino/B5_M1766.png",    //28
        "https://Karlxz.github.io/img/ojos/masculino/B4_M1283.png",    //29
        "https://Karlxz.github.io/img/ojos/masculino/B3_M1583.png",    //30
        "https://Karlxz.github.io/img/ojos/masculino/B2_M1483.png",    //31
        "https://Karlxz.github.io/img/ojos/masculino/B1_M2405.png",    //32
        "https://Karlxz.github.io/img/ojos/masculino/A7_M1000.png",    //33
        "https://Karlxz.github.io/img/ojos/masculino/A6_M0287.png",    //34
        "https://Karlxz.github.io/img/ojos/masculino/A5_M1048.png",    //35
        "https://Karlxz.github.io/img/ojos/masculino/A4_M0967.png",    //36
        "https://Karlxz.github.io/img/ojos/masculino/A3_M0311.png",    //37
        "https://Karlxz.github.io/img/ojos/masculino/A2_M0233.png",    //38
        "https://Karlxz.github.io/img/ojos/masculino/A1_M0571.png",    //39

        //Ojos femeninos
        "https://Karlxz.github.io/img/ojos/femenino/F4_F0160.png",    //1
        "https://Karlxz.github.io/img/ojos/femenino/F3_F1298.png",    //2
        "https://Karlxz.github.io/img/ojos/femenino/F2_F0521.png",    //3
        "https://Karlxz.github.io/img/ojos/femenino/F1_F0698.png",    //4
        "https://Karlxz.github.io/img/ojos/femenino/E6_F0188.png",    //5
        "https://Karlxz.github.io/img/ojos/femenino/E5_F2553.png",    //6
        "https://Karlxz.github.io/img/ojos/femenino/E4_F0661.png",    //7
        "https://Karlxz.github.io/img/ojos/femenino/E3_F2550.png",    //8
        "https://Karlxz.github.io/img/ojos/femenino/E2_F2852.png",    //9
        "https://Karlxz.github.io/img/ojos/femenino/E1_F1703.png",    //10
        "https://Karlxz.github.io/img/ojos/femenino/D7_F2706.png",    //11
        "https://Karlxz.github.io/img/ojos/femenino/D6_F2873.png",    //12
        "https://Karlxz.github.io/img/ojos/femenino/D5_F1370.png",    //13
        "https://Karlxz.github.io/img/ojos/femenino/D4_F1362.png",    //14
        "https://Karlxz.github.io/img/ojos/femenino/D3_F0168.png",    //15
        "https://Karlxz.github.io/img/ojos/femenino/D2_F2882.png",    //16
        "https://Karlxz.github.io/img/ojos/femenino/D1_F0301.png",    //17
        "https://Karlxz.github.io/img/ojos/femenino/C6_F1932.png",    //18
        "https://Karlxz.github.io/img/ojos/femenino/C5_F0179.png",    //19
        "https://Karlxz.github.io/img/ojos/femenino/C4_F1223.png",    //20
        "https://Karlxz.github.io/img/ojos/femenino/C3_F1221.png",    //21
        "https://Karlxz.github.io/img/ojos/femenino/C2_F2442.png",    //22
        "https://Karlxz.github.io/img/ojos/femenino/C1_F2407.png",    //23
        "https://Karlxz.github.io/img/ojos/femenino/B5_F1308.png",    //24
        "https://Karlxz.github.io/img/ojos/femenino/B4_F1606.png",    //25
        "https://Karlxz.github.io/img/ojos/femenino/B3_F0710.png",    //26
        "https://Karlxz.github.io/img/ojos/femenino/B2_F2472.png",    //27
        "https://Karlxz.github.io/img/ojos/femenino/B1_F1037.png",    //28
        "https://Karlxz.github.io/img/ojos/femenino/A7_F1614.png",    //29
        "https://Karlxz.github.io/img/ojos/femenino/A6_F1603.png",    //30
        "https://Karlxz.github.io/img/ojos/femenino/A5_F1334.png",    //31
        "https://Karlxz.github.io/img/ojos/femenino/A4_F1300.png",    //32
        "https://Karlxz.github.io/img/ojos/femenino/A3_F1040.png",    //33
        "https://Karlxz.github.io/img/ojos/femenino/A2_F1612.png",    //34
        "https://Karlxz.github.io/img/ojos/femenino/A1_F2356.png",    //35

        //Cejas masculinas
        "https://Karlxz.github.io/img/cejas/masculino/C5_M0129.png",    //1
        "https://Karlxz.github.io/img/cejas/masculino/C4_M0039.png",    //2
        "https://Karlxz.github.io/img/cejas/masculino/C3_M0015.png",    //3
        "https://Karlxz.github.io/img/cejas/masculino/C2_M0591.png",    //4
        "https://Karlxz.github.io/img/cejas/masculino/C1_M0278.png",    //5
        "https://Karlxz.github.io/img/cejas/masculino/B5_M0570.png",    //6
        "https://Karlxz.github.io/img/cejas/masculino/B4_M0269.png",    //7
        "https://Karlxz.github.io/img/cejas/masculino/B3_M0132.png",    //8
        "https://Karlxz.github.io/img/cejas/masculino/B2_M0247.png",    //9
        "https://Karlxz.github.io/img/cejas/masculino/B1_M0104.png",    //10
        "https://Karlxz.github.io/img/cejas/masculino/A5_M0032.png",    //11
        "https://Karlxz.github.io/img/cejas/masculino/A4_M0185.png",    //12
        "https://Karlxz.github.io/img/cejas/masculino/A3_M0665.png",    //13
        "https://Karlxz.github.io/img/cejas/masculino/A2_M0327.png",    //14
        "https://Karlxz.github.io/img/cejas/masculino/A1_M0110.png",    //15

        //Cejas femeninas
        "https://Karlxz.github.io/img/cejas/femenino/C5_F0198.png",    //1
        "https://Karlxz.github.io/img/cejas/femenino/C4_F1289.png",    //2
        "https://Karlxz.github.io/img/cejas/femenino/C3_F0036.png",    //3
        "https://Karlxz.github.io/img/cejas/femenino/C2_F0143.png",    //4
        "https://Karlxz.github.io/img/cejas/femenino/C1_F0014.png",    //5
        "https://Karlxz.github.io/img/cejas/femenino/B5_F0063.png",    //6
        "https://Karlxz.github.io/img/cejas/femenino/B4_F1798.png",    //7
        "https://Karlxz.github.io/img/cejas/femenino/B3_F0066.png",    //8
        "https://Karlxz.github.io/img/cejas/femenino/B2_F0213.png",    //9
        "https://Karlxz.github.io/img/cejas/femenino/B1_F0135.png",    //10
        "https://Karlxz.github.io/img/cejas/femenino/A5_F0224.png",    //11
        "https://Karlxz.github.io/img/cejas/femenino/A4_F0194.png",    //12
        "https://Karlxz.github.io/img/cejas/femenino/A3_F0552.png",    //13
        "https://Karlxz.github.io/img/cejas/femenino/A2_F0526.png",    //14
        "https://Karlxz.github.io/img/cejas/femenino/A1_F0149.png",    //15

        //Narices masculinas
        "https://Karlxz.github.io/img/narices/masculino/C4_M1039.png",    //1
        "https://Karlxz.github.io/img/narices/masculino/C3_M2530.png",    //2
        "https://Karlxz.github.io/img/narices/masculino/C2_M2417.png",    //3
        "https://Karlxz.github.io/img/narices/masculino/C1_M1234.png",    //4
        "https://Karlxz.github.io/img/narices/masculino/B4_M0713.png",    //5
        "https://Karlxz.github.io/img/narices/masculino/B3_M0278.png",    //6
        "https://Karlxz.github.io/img/narices/masculino/B2_M1105.png",    //7
        "https://Karlxz.github.io/img/narices/masculino/B1_M2405.png",    //8
        "https://Karlxz.github.io/img/narices/masculino/A4_M1338.png",    //9
        "https://Karlxz.github.io/img/narices/masculino/A3_M0574.png",    //10
        "https://Karlxz.github.io/img/narices/masculino/A2_M1319.png",    //11
        "https://Karlxz.github.io/img/narices/masculino/A1_M0091.png",    //12

        //Narices femeninas
        "https://Karlxz.github.io/img/narices/femenino/C4_F1753.png",    //1
        "https://Karlxz.github.io/img/narices/femenino/C3_F2227.png",    //2
        "https://Karlxz.github.io/img/narices/femenino/C2_F2443.png",    //3
        "https://Karlxz.github.io/img/narices/femenino/C1_F2700.png",    //4
        "https://Karlxz.github.io/img/narices/femenino/B4_F0903.png",    //5
        "https://Karlxz.github.io/img/narices/femenino/B3_F2229.png",    //6
        "https://Karlxz.github.io/img/narices/femenino/B2_F2383.png",    //7
        "https://Karlxz.github.io/img/narices/femenino/B1_F0086.png",    //8
        "https://Karlxz.github.io/img/narices/femenino/A4_F0225.png",    //9
        "https://Karlxz.github.io/img/narices/femenino/A3_F1315.png",    //10
        "https://Karlxz.github.io/img/narices/femenino/A2_F0056.png",    //11
        "https://Karlxz.github.io/img/narices/femenino/A1_F2682.png",    //12

        //Labios masculinos
        "https://Karlxz.github.io/img/labios/masculino/C5_M2111.png",    //1
        "https://Karlxz.github.io/img/labios/masculino/C4_M0403.png",    //2
        "https://Karlxz.github.io/img/labios/masculino/C3_M1688.png",    //3
        "https://Karlxz.github.io/img/labios/masculino/C2_M1079.png",    //4
        "https://Karlxz.github.io/img/labios/masculino/C1_M2309.png",    //5
        "https://Karlxz.github.io/img/labios/masculino/B5_M0954.png",    //6
        "https://Karlxz.github.io/img/labios/masculino/B4_M2131.png",    //7
        "https://Karlxz.github.io/img/labios/masculino/B3_M0678.png",    //8
        "https://Karlxz.github.io/img/labios/masculino/B2_M0609.png",    //9
        "https://Karlxz.github.io/img/labios/masculino/B1_M0574.png",    //10
        "https://Karlxz.github.io/img/labios/masculino/A5_M0584.png",    //11
        "https://Karlxz.github.io/img/labios/masculino/A4_M2593.png",    //12
        "https://Karlxz.github.io/img/labios/masculino/A3_M1091.png",    //13
        "https://Karlxz.github.io/img/labios/masculino/A2_M0223.png",    //14
        "https://Karlxz.github.io/img/labios/masculino/A1_M1601.png",    //15

        //Labios femeninos
        "https://Karlxz.github.io/img/labios/femenino/C5_F1585.png",    //1
        "https://Karlxz.github.io/img/labios/femenino/C4_F1546.png",    //2
        "https://Karlxz.github.io/img/labios/femenino/C3_F1620.png",    //3
        "https://Karlxz.github.io/img/labios/femenino/C2_F2142.png",    //4
        "https://Karlxz.github.io/img/labios/femenino/C1_F0643.png",    //5
        "https://Karlxz.github.io/img/labios/femenino/B5_F2861.png",    //6
        "https://Karlxz.github.io/img/labios/femenino/B4_F2430.png",    //7
        "https://Karlxz.github.io/img/labios/femenino/B3_F2272.png",    //8
        "https://Karlxz.github.io/img/labios/femenino/B2_F2283.png",    //9
        "https://Karlxz.github.io/img/labios/femenino/B1_F1897.png",    //10
        "https://Karlxz.github.io/img/labios/femenino/A5_F0037.png",    //11
        "https://Karlxz.github.io/img/labios/femenino/A4_F1094.png",    //12
        "https://Karlxz.github.io/img/labios/femenino/A3_F0783.png",    //13
        "https://Karlxz.github.io/img/labios/femenino/A2_F0038.png",    //14
        "https://Karlxz.github.io/img/labios/femenino/A1_F1347.png",    //15

        //Orejas masculinas
        "https://Karlxz.github.io/img/orejas/masculino/C3_M1439.png",    //1        212
        "https://Karlxz.github.io/img/orejas/masculino/C2_M1397.png",    //2
        "https://Karlxz.github.io/img/orejas/masculino/C1_M1383.png",    //3
        "https://Karlxz.github.io/img/orejas/masculino/B3_M0027.png",    //4
        "https://Karlxz.github.io/img/orejas/masculino/B2_M1390.png",    //5
        "https://Karlxz.github.io/img/orejas/masculino/B1_M1434.png",    //6
        "https://Karlxz.github.io/img/orejas/masculino/A3_M0018.png",    //7
        "https://Karlxz.github.io/img/orejas/masculino/A2_M1104.png",    //8
        "https://Karlxz.github.io/img/orejas/masculino/A1_M0635.png",    //9

        //Orejas femeninas
        "https://Karlxz.github.io/img/orejas/femenino/C3_F1289.png",    //1
        "https://Karlxz.github.io/img/orejas/femenino/C2_F0112.png",    //2
        "https://Karlxz.github.io/img/orejas/femenino/C1_F1213.png",    //3
        "https://Karlxz.github.io/img/orejas/femenino/B3_F1314.png",    //4
        "https://Karlxz.github.io/img/orejas/femenino/B2_F1207.png",    //5
        "https://Karlxz.github.io/img/orejas/femenino/B1_F0195.png",    //6
        "https://Karlxz.github.io/img/orejas/femenino/A3_F1209.png",    //7
        "https://Karlxz.github.io/img/orejas/femenino/A2_F1216.png",    //8
        "https://Karlxz.github.io/img/orejas/femenino/A1_F0163.png",    //9

        //Papadas masculinas
        "https://Karlxz.github.io/img/papadas/masculino/C3_M1034.png",    //1       230
        "https://Karlxz.github.io/img/papadas/masculino/C2_M0018.png",    //2
        "https://Karlxz.github.io/img/papadas/masculino/C1_M0985.png",    //3
        "https://Karlxz.github.io/img/papadas/masculino/B3_M0677.png",    //4
        "https://Karlxz.github.io/img/papadas/masculino/B2_M1022.png",    //5
        "https://Karlxz.github.io/img/papadas/masculino/B1_M0655.png",    //6
        "https://Karlxz.github.io/img/papadas/masculino/A3_M0125.png",    //7
        "https://Karlxz.github.io/img/papadas/masculino/A2_M0134.png",    //8
        "https://Karlxz.github.io/img/papadas/masculino/A1_M0008.png",    //9

        //papadas femeninas
        "https://Karlxz.github.io/img/papadas/femenino/C3_F0085.png",    //1
        "https://Karlxz.github.io/img/papadas/femenino/C2_F0124.png",    //2
        "https://Karlxz.github.io/img/papadas/femenino/C1_F0106.png",    //3
        "https://Karlxz.github.io/img/papadas/femenino/B3_F0151.png",    //4
        "https://Karlxz.github.io/img/papadas/femenino/B2_F0094.png",    //5
        "https://Karlxz.github.io/img/papadas/femenino/B1_F0111.png",    //6
        "https://Karlxz.github.io/img/papadas/femenino/A3_F2431.png",    //7
        "https://Karlxz.github.io/img/papadas/femenino/A2_F2485.png",    //8
        "https://Karlxz.github.io/img/papadas/femenino/A1_F2447.png",    //9

        //Cachetes masculinos
        "https://Karlxz.github.io/img/piel/1-cachetes/masculino/C3_M0506.png",    //1       248
        "https://Karlxz.github.io/img/piel/1-cachetes/masculino/C2_M0027.png",    //2
        "https://Karlxz.github.io/img/piel/1-cachetes/masculino/C1_M0127.png",    //3
        "https://Karlxz.github.io/img/piel/1-cachetes/masculino/B3_M0291.png",    //4
        "https://Karlxz.github.io/img/piel/1-cachetes/masculino/B2_M2593.png",    //5
        "https://Karlxz.github.io/img/piel/1-cachetes/masculino/B1_M2420.png",    //6
        "https://Karlxz.github.io/img/piel/1-cachetes/masculino/A3_M0311.png",    //7
        "https://Karlxz.github.io/img/piel/1-cachetes/masculino/A2_M2474.png",    //8
        "https://Karlxz.github.io/img/piel/1-cachetes/masculino/A1_M2594.png",    //9

        //Cachetes femeninos
        "https://Karlxz.github.io/img/piel/1-cachetes/femenino/C_F2573.png",    //1
        "https://Karlxz.github.io/img/piel/1-cachetes/femenino/B_F2437.png",    //2
        "https://Karlxz.github.io/img/piel/1-cachetes/femenino/A_F2443.png",    //3

        //Arrugas entrecejo masculinas
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/masculino/C3_M0837.png",    //1       260
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/masculino/C2_M2424.png",    //2
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/masculino/C1_M2420.png",    //3
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/masculino/B3_M2593.png",    //4
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/masculino/B2_M2584.png",    //5
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/masculino/B1_M1087.png",    //6
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/masculino/A3_M0233.png",    //7
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/masculino/A2_M1090.png",    //8
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/masculino/A1_M2474.png",    //9

        //Arrugas entrecejo femeninas
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/femenino/C3_F2453.png",    //1
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/femenino/C2_F2448.png",    //2
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/femenino/C1_F2436.png",    //3
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/femenino/B3_F0019.png",    //4
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/femenino/B2_F2433.png",    //5
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/femenino/B1_F0156.png",    //6
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/femenino/A3_F2437.png",    //7
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/femenino/A2_F2441.png",    //8
        "https://Karlxz.github.io/img/piel/2-arrugasEntrecejo/femenino/A1_F2443.png",    //9

        //Arrugas perioculares masculinas
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/masculino/C3_M1369.png",    //1          278
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/masculino/C2_M2477.png",    //2
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/masculino/C1_M0013.png",    //3
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/masculino/B3_M0052.png",    //4
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/masculino/B2_M2462.png",    //5
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/masculino/B1_M0894.png",    //6
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/masculino/A3_M2594.png",    //7
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/masculino/A2_M2456.png",    //8
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/masculino/A1_M0906.png",    //9

        //Arrugas perioculares femeninas
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/femenino/C3_F0767.png",    //1
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/femenino/C2_F0171.png",    //2
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/femenino/C1_F2441.png",    //3
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/femenino/B3_F0034.png",    //4
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/femenino/B2_F2428.png",    //5
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/femenino/B1_F2577.png",    //6
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/femenino/A3_F2448.png",    //7
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/femenino/A2_F2437.png",    //8
        "https://Karlxz.github.io/img/piel/3-arrugasPerioculares/femenino/A1_F2443.png",    //9

        //Arrugas nasogenianas masculinas
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/masculino/C3_M0033.png",    //1          296
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/masculino/C2_M2533.png",    //2
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/masculino/C1_M0052.png",    //3
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/masculino/B3_M0284.png",    //4
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/masculino/B2_M0233.png",    //5
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/masculino/B1_M2595.png",    //6
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/masculino/A3_M2456.png",    //7
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/masculino/A2_M2420.png",    //8
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/masculino/A1_M0311.png",    //9

        //Arrugas nasogenianas femeninas
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/femenino/C3_F0931.png",    //1
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/femenino/C2_F2423.png",    //2
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/femenino/C1_F2453.png",    //3
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/femenino/B3_F0061.png",    //4
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/femenino/B2_F2577.png",    //5
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/femenino/B1_F2433.png",    //6
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/femenino/A3_F0021.png",    //7
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/femenino/A2_F2443.png",    //8
        "https://Karlxz.github.io/img/piel/4-arrugasNasogenianas/femenino/A1_F2441.png",    //9

        //Arrugas peribucales masculinas
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/masculino/C3_M1078.png",    //1          314
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/masculino/C2_M1369.png",    //2
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/masculino/C1_M0132.png",    //3
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/masculino/B3_M0013.png",    //4
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/masculino/B2_M0233.png",    //5
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/masculino/B1_M0041.png",    //6
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/masculino/A3_M2420.png",    //7
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/masculino/A2_M0311.png",    //8
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/masculino/A1_M2594.png",    //9

        //Arrugas peribucales femeninas
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/femenino/C3_F0931.png",    //1
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/femenino/C2_F2423.png",    //2
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/femenino/C1_F0061.png",    //3
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/femenino/B3_F2450.png",    //4
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/femenino/B2_F2573.png",    //5
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/femenino/B1_F0019.png",    //6
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/femenino/A3_F2437.png",    //7
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/femenino/A2_F0034.png",    //8
        "https://Karlxz.github.io/img/piel/5-arrugasPeribucales/femenino/A1_F2441.png",    //9

        //Acne masculino
        "https://Karlxz.github.io/img/piel/acne/masculino/M2090.png",    //1             332
        "https://Karlxz.github.io/img/piel/acne/masculino/M1482.png",    //2
        "https://Karlxz.github.io/img/piel/acne/masculino/M0741.png",    //3
        "https://Karlxz.github.io/img/piel/acne/masculino/M0582.png",    //4

        //Acen femenino
        "https://Karlxz.github.io/img/piel/acne/femenino/F1354.png",    //1
        "https://Karlxz.github.io/img/piel/acne/femenino/F1133.png",    //2
        "https://Karlxz.github.io/img/piel/acne/femenino/F0721.png",    //3
        "https://Karlxz.github.io/img/piel/acne/femenino/F0166.png",    //4

        //Cicatriz
        "https://Karlxz.github.io/img/piel/cicatrices/D_M1184.png",    //1           340
        "https://Karlxz.github.io/img/piel/cicatrices/C_M1015.png",    //2
        "https://Karlxz.github.io/img/piel/cicatrices/B_M1184.png",    //3
        "https://Karlxz.github.io/img/piel/cicatrices/A_M1423.png",    //4

        //Pecas
        "https://Karlxz.github.io/img/piel/pecas/F1176.png",    //1             344
        "https://Karlxz.github.io/img/piel/pecas/F0366.png",    //2

        //Verrugas y lunares
        "https://Karlxz.github.io/img/piel/verrugasyLunares/J_M0158.png",    //1           346
        "https://Karlxz.github.io/img/piel/verrugasyLunares/I_M0223.png",    //2
        "https://Karlxz.github.io/img/piel/verrugasyLunares/H_M0032.png",    //3
        "https://Karlxz.github.io/img/piel/verrugasyLunares/G_F0042.png",    //4
        "https://Karlxz.github.io/img/piel/verrugasyLunares/F_F1131.png",    //5
        "https://Karlxz.github.io/img/piel/verrugasyLunares/E_F1108.png",    //6
        "https://Karlxz.github.io/img/piel/verrugasyLunares/D_M0313.png",    //7
        "https://Karlxz.github.io/img/piel/verrugasyLunares/C_F0156.png",    //8
        "https://Karlxz.github.io/img/piel/verrugasyLunares/B_F0907.png",    //9
        "https://Karlxz.github.io/img/piel/verrugasyLunares/A_M0041.png",    //10

        //Hoyo menton masculino
        "https://Karlxz.github.io/img/hoyoMenton/masculino/F_M1434.png",    //1           356
        "https://Karlxz.github.io/img/hoyoMenton/masculino/E_M0178.png",    //2
        "https://Karlxz.github.io/img/hoyoMenton/masculino/D_M0114.png",    //3
        "https://Karlxz.github.io/img/hoyoMenton/masculino/C_M1337.png",    //4
        "https://Karlxz.github.io/img/hoyoMenton/masculino/B_M0305.png",    //5
        "https://Karlxz.github.io/img/hoyoMenton/masculino/A_M1389.png",    //6

        //Hoyo menton femenino
        "https://Karlxz.github.io/img/hoyoMenton/femenino/F_F1349.png",    //1
        "https://Karlxz.github.io/img/hoyoMenton/femenino/E_F0035.png",    //2
        "https://Karlxz.github.io/img/hoyoMenton/femenino/D_F1379.png",    //3
        "https://Karlxz.github.io/img/hoyoMenton/femenino/C_F0168.png",    //4
        "https://Karlxz.github.io/img/hoyoMenton/femenino/B_F0671.png",    //5
        "https://Karlxz.github.io/img/hoyoMenton/femenino/A_F1376.png",    //6

        //Asimetrias
        "https://Karlxz.github.io/img/asimetrias/M0364.png",    //1           368
        "https://Karlxz.github.io/img/asimetrias/M0312.png",    //2
        "https://Karlxz.github.io/img/asimetrias/F0727.png",    //3
        "https://Karlxz.github.io/img/asimetrias/F0674.png",    //4
        "https://Karlxz.github.io/img/asimetrias/F0355.png",    //5
        "https://Karlxz.github.io/img/asimetrias/F0072.png",    //6
        "https://Karlxz.github.io/img/asimetrias/F0059.png",    //7

        //Torus
        "https://Karlxz.github.io/img/torus/C_M0130.png",    //1         375
        "https://Karlxz.github.io/img/torus/B_M0360.png",    //2
        "https://Karlxz.github.io/img/torus/A_M0324.png",    //3

        //Cabelleras masculinas
        "https://Karlxz.github.io/img/cabelleras/masculino/C11_M0041.png",    //1   378
        "https://Karlxz.github.io/img/cabelleras/masculino/C10_M0248.png",    //2
        "https://Karlxz.github.io/img/cabelleras/masculino/C9_M0055.png",    //3
        "https://Karlxz.github.io/img/cabelleras/masculino/C8_M0233.png",    //4
        "https://Karlxz.github.io/img/cabelleras/masculino/C7_M0884.png",    //5
        "https://Karlxz.github.io/img/cabelleras/masculino/C6_M0015.png",    //6
        "https://Karlxz.github.io/img/cabelleras/masculino/C5_M0129.png",    //7
        "https://Karlxz.github.io/img/cabelleras/masculino/C4_M0205.png",    //8
        "https://Karlxz.github.io/img/cabelleras/masculino/C3_M1051.png",    //9
        "https://Karlxz.github.io/img/cabelleras/masculino/C2_M0147.png",    //10
        "https://Karlxz.github.io/img/cabelleras/masculino/C1_M0104.png",    //11
        "https://Karlxz.github.io/img/cabelleras/masculino/B26_M2171.png",    //12
        "https://Karlxz.github.io/img/cabelleras/masculino/B25_M0183.png",    //13
        "https://Karlxz.github.io/img/cabelleras/masculino/B24_M1991.png",    //14
        "https://Karlxz.github.io/img/cabelleras/masculino/B23_M1966.png",    //15
        "https://Karlxz.github.io/img/cabelleras/masculino/B22_M1956.png",    //16
        "https://Karlxz.github.io/img/cabelleras/masculino/B21_M0941.png",    //17
        "https://Karlxz.github.io/img/cabelleras/masculino/B20_M1998.png",    //18
        "https://Karlxz.github.io/img/cabelleras/masculino/B19_M1904.png",    //19
        "https://Karlxz.github.io/img/cabelleras/masculino/B18_M1954.png",    //20
        "https://Karlxz.github.io/img/cabelleras/masculino/B17_M1890.png",    //21
        "https://Karlxz.github.io/img/cabelleras/masculino/B16_M0706.png",    //22
        "https://Karlxz.github.io/img/cabelleras/masculino/B15_M0592.png",    //23
        "https://Karlxz.github.io/img/cabelleras/masculino/B14_M0126.png",    //24
        "https://Karlxz.github.io/img/cabelleras/masculino/B13_M2318.png",    //25
        "https://Karlxz.github.io/img/cabelleras/masculino/B12_M1045.png",    //26
        "https://Karlxz.github.io/img/cabelleras/masculino/B11_M0244.png",    //27
        "https://Karlxz.github.io/img/cabelleras/masculino/B10_M0167.png",    //28
        "https://Karlxz.github.io/img/cabelleras/masculino/B9_M0285.png",    //29
        "https://Karlxz.github.io/img/cabelleras/masculino/B8_M0090.png",    //30
        "https://Karlxz.github.io/img/cabelleras/masculino/B7_M0313.png",    //31
        "https://Karlxz.github.io/img/cabelleras/masculino/B6_M2657.png",    //32
        "https://Karlxz.github.io/img/cabelleras/masculino/B5_M2566.png",    //33
        "https://Karlxz.github.io/img/cabelleras/masculino/B4_M0874.png",    //34
        "https://Karlxz.github.io/img/cabelleras/masculino/B3_M0199.png",    //35
        "https://Karlxz.github.io/img/cabelleras/masculino/B2_M0136.png",    //36
        "https://Karlxz.github.io/img/cabelleras/masculino/B1_M0973.png",    //37
        "https://Karlxz.github.io/img/cabelleras/masculino/A39_M0280.png",    //38
        "https://Karlxz.github.io/img/cabelleras/masculino/A38_M0230.png",    //39
        "https://Karlxz.github.io/img/cabelleras/masculino/A37_M1313.png",    //40
        "https://Karlxz.github.io/img/cabelleras/masculino/A36_M0317.png",    //41
        "https://Karlxz.github.io/img/cabelleras/masculino/A35_M1974.png",    //42
        "https://Karlxz.github.io/img/cabelleras/masculino/A34_M2000.png",    //43
        "https://Karlxz.github.io/img/cabelleras/masculino/A33_M2308.png",    //44
        "https://Karlxz.github.io/img/cabelleras/masculino/A32_M1969.png",    //45
        "https://Karlxz.github.io/img/cabelleras/masculino/A31_M1747.png",    //46
        "https://Karlxz.github.io/img/cabelleras/masculino/A30_M1556.png",    //47
        "https://Karlxz.github.io/img/cabelleras/masculino/A29_M2334.png",    //48
        "https://Karlxz.github.io/img/cabelleras/masculino/A28_M0033.png",    //49
        "https://Karlxz.github.io/img/cabelleras/masculino/A27_M1049.png",    //50
        "https://Karlxz.github.io/img/cabelleras/masculino/A26_M1007.png",    //51
        "https://Karlxz.github.io/img/cabelleras/masculino/A25_M0018.png",    //52
        "https://Karlxz.github.io/img/cabelleras/masculino/A24_M1905.png",    //53
        "https://Karlxz.github.io/img/cabelleras/masculino/A23_M2629.png",    //54
        "https://Karlxz.github.io/img/cabelleras/masculino/A22_M2585.png",    //55
        "https://Karlxz.github.io/img/cabelleras/masculino/A21_M2420.png",    //56
        "https://Karlxz.github.io/img/cabelleras/masculino/A20_M0228.png",    //57
        "https://Karlxz.github.io/img/cabelleras/masculino/A19_M1151.png",    //58
        "https://Karlxz.github.io/img/cabelleras/masculino/A18_M0008.png",    //59
        "https://Karlxz.github.io/img/cabelleras/masculino/A17_M0514.png",    //60
        "https://Karlxz.github.io/img/cabelleras/masculino/A16_M0121.png",    //61
        "https://Karlxz.github.io/img/cabelleras/masculino/A15_M0227.png",    //62
        "https://Karlxz.github.io/img/cabelleras/masculino/A14_M1105.png",    //63
        "https://Karlxz.github.io/img/cabelleras/masculino/A13_M1970.png",    //64
        "https://Karlxz.github.io/img/cabelleras/masculino/A12_M1008.png",    //65
        "https://Karlxz.github.io/img/cabelleras/masculino/A11_M1909.png",    //66
        "https://Karlxz.github.io/img/cabelleras/masculino/A10_M1050.png",    //67
        "https://Karlxz.github.io/img/cabelleras/masculino/A9_M1337.png",    //68
        "https://Karlxz.github.io/img/cabelleras/masculino/A8_M2306.png",    //69
        "https://Karlxz.github.io/img/cabelleras/masculino/A7_M1508.png",    //70
        "https://Karlxz.github.io/img/cabelleras/masculino/A6_M1994.png",    //71
        "https://Karlxz.github.io/img/cabelleras/masculino/A5_M0051.png",    //72
        "https://Karlxz.github.io/img/cabelleras/masculino/A4_M1043.png",    //73
        "https://Karlxz.github.io/img/cabelleras/masculino/A3_M0039.png",    //74
        "https://Karlxz.github.io/img/cabelleras/masculino/A2_M0083.png",    //75
        "https://Karlxz.github.io/img/cabelleras/masculino/A1_M0599.png",    //76

        //Cabelleras femeninas
        "https://Karlxz.github.io/img/cabelleras/femenino/B20_F2433.png",    //1
        "https://Karlxz.github.io/img/cabelleras/femenino/B19_F1393.png",    //2
        "https://Karlxz.github.io/img/cabelleras/femenino/B18_F1524.png",    //3
        "https://Karlxz.github.io/img/cabelleras/femenino/B17_F1769.png",    //4
        "https://Karlxz.github.io/img/cabelleras/femenino/B16_F2576.png",    //5
        "https://Karlxz.github.io/img/cabelleras/femenino/B15_F0889.png",    //6
        "https://Karlxz.github.io/img/cabelleras/femenino/B14_F0858.png",    //7
        "https://Karlxz.github.io/img/cabelleras/femenino/B13_F0038.png",    //8
        "https://Karlxz.github.io/img/cabelleras/femenino/B12_F0752.png",    //9
        "https://Karlxz.github.io/img/cabelleras/femenino/B11_F0113.png",    //10
        "https://Karlxz.github.io/img/cabelleras/femenino/B10_F0151.png",    //11
        "https://Karlxz.github.io/img/cabelleras/femenino/B9_F0002.png",    //12
        "https://Karlxz.github.io/img/cabelleras/femenino/B8_F0347.png",    //13
        "https://Karlxz.github.io/img/cabelleras/femenino/B7_F0117.png",    //14
        "https://Karlxz.github.io/img/cabelleras/femenino/B6_F0643.png",    //15
        "https://Karlxz.github.io/img/cabelleras/femenino/B5_F0170.png",    //16
        "https://Karlxz.github.io/img/cabelleras/femenino/B4_F0509.png",    //17
        "https://Karlxz.github.io/img/cabelleras/femenino/B3_F0119.png",    //18
        "https://Karlxz.github.io/img/cabelleras/femenino/B2_F0723.png",    //19
        "https://Karlxz.github.io/img/cabelleras/femenino/B1_F1757.png",    //20
        "https://Karlxz.github.io/img/cabelleras/femenino/A30_F1606.png",    //21
        "https://Karlxz.github.io/img/cabelleras/femenino/A29_F2443.png",    //22
        "https://Karlxz.github.io/img/cabelleras/femenino/A28_F0120.png",    //23
        "https://Karlxz.github.io/img/cabelleras/femenino/A27_F0945.png",    //24
        "https://Karlxz.github.io/img/cabelleras/femenino/A26_F0965.png",    //25
        "https://Karlxz.github.io/img/cabelleras/femenino/A25_F1020.png",    //26
        "https://Karlxz.github.io/img/cabelleras/femenino/A24_F1066.png",    //27
        "https://Karlxz.github.io/img/cabelleras/femenino/A23_F2346.png",    //28
        "https://Karlxz.github.io/img/cabelleras/femenino/A22_F2383.png",    //29
        "https://Karlxz.github.io/img/cabelleras/femenino/A21_F0135.png",    //30
        "https://Karlxz.github.io/img/cabelleras/femenino/A20_F1657.png",    //31
        "https://Karlxz.github.io/img/cabelleras/femenino/A19_F0671.png",    //32
        "https://Karlxz.github.io/img/cabelleras/femenino/A18_F0525.png",    //33
        "https://Karlxz.github.io/img/cabelleras/femenino/A17_F2473.png",    //34
        "https://Karlxz.github.io/img/cabelleras/femenino/A16_F1564.png",    //35
        "https://Karlxz.github.io/img/cabelleras/femenino/A15_F2339.png",    //36
        "https://Karlxz.github.io/img/cabelleras/femenino/A14_F1235.png",    //37
        "https://Karlxz.github.io/img/cabelleras/femenino/A13_F0221.png",    //38
        "https://Karlxz.github.io/img/cabelleras/femenino/A12_F1127.png",    //39
        "https://Karlxz.github.io/img/cabelleras/femenino/A11_F2249.png",    //40
        "https://Karlxz.github.io/img/cabelleras/femenino/A10_F2208.png",    //41
        "https://Karlxz.github.io/img/cabelleras/femenino/A9_F0737.png",    //42
        "https://Karlxz.github.io/img/cabelleras/femenino/A8_F0226.png",    //43
        "https://Karlxz.github.io/img/cabelleras/femenino/A7_F1600.png",    //44
        "https://Karlxz.github.io/img/cabelleras/femenino/A6_F1212.png",    //45
        "https://Karlxz.github.io/img/cabelleras/femenino/A5_F1334.png",    //46
        "https://Karlxz.github.io/img/cabelleras/femenino/A4_F0348.png",    //47
        "https://Karlxz.github.io/img/cabelleras/femenino/A3_F0169.png",    //48
        "https://Karlxz.github.io/img/cabelleras/femenino/A2_F1993.png",    //49
        "https://Karlxz.github.io/img/cabelleras/femenino/A1_F1613.png",    //50

        //Bigotes masculinos
        "https://Karlxz.github.io/img/bigotes/masculino/C5_M0130.png",    //1       504
        "https://Karlxz.github.io/img/bigotes/masculino/C4_M0146.png",    //2
        "https://Karlxz.github.io/img/bigotes/masculino/C3_M0233.png",    //3
        "https://Karlxz.github.io/img/bigotes/masculino/C2_M0245.png",    //4
        "https://Karlxz.github.io/img/bigotes/masculino/C1_M1198.png",    //5
        "https://Karlxz.github.io/img/bigotes/masculino/B5_M0260.png",    //6
        "https://Karlxz.github.io/img/bigotes/masculino/B4_M0003.png",    //7
        "https://Karlxz.github.io/img/bigotes/masculino/B3_M0081.png",    //8
        "https://Karlxz.github.io/img/bigotes/masculino/B2_M0017.png",    //9
        "https://Karlxz.github.io/img/bigotes/masculino/B1_M0010.png",    //10
        "https://Karlxz.github.io/img/bigotes/masculino/A5_M0214.png",    //11
        "https://Karlxz.github.io/img/bigotes/masculino/A4_M0027.png",    //12
        "https://Karlxz.github.io/img/bigotes/masculino/A3_M0287.png",    //13
        "https://Karlxz.github.io/img/bigotes/masculino/A2_M0258.png",    //14
        "https://Karlxz.github.io/img/bigotes/masculino/A1_M0083.png",    //15

        //Bigotes femeninos
        "https://Karlxz.github.io/img/bigotes/femenino/B1_F0048.png",    //1
        "https://Karlxz.github.io/img/bigotes/femenino/A1_F0118.png",    //2

        //Barbas
        "https://Karlxz.github.io/img/barbas/B5_M0592.png",    //1                  521
        "https://Karlxz.github.io/img/barbas/B4_M0967.png",    //2
        "https://Karlxz.github.io/img/barbas/B3_M0260.png",    //3
        "https://Karlxz.github.io/img/barbas/B2_M0251.png",    //4
        "https://Karlxz.github.io/img/barbas/B1_M1198.png",    //5
        "https://Karlxz.github.io/img/barbas/A5_M1007.png",    //6
        "https://Karlxz.github.io/img/barbas/A4_M0874.png",    //7
        "https://Karlxz.github.io/img/barbas/A3_M0060.png",    //8
        "https://Karlxz.github.io/img/barbas/A2_M0053.png",    //9
        "https://Karlxz.github.io/img/barbas/A1_M0205.png",    //10

        //Aretes
        "https://Karlxz.github.io/img/accesorios/aretes/L_F0604.png",    //1        531
        "https://Karlxz.github.io/img/accesorios/aretes/K_M0706.png",    //2
        "https://Karlxz.github.io/img/accesorios/aretes/J_F0201.png",    //3
        "https://Karlxz.github.io/img/accesorios/aretes/I_F1262.png",    //4
        "https://Karlxz.github.io/img/accesorios/aretes/H_F0470.png",    //5
        "https://Karlxz.github.io/img/accesorios/aretes/G_F0124.png",    //6
        "https://Karlxz.github.io/img/accesorios/aretes/F_F0195.png",    //7
        "https://Karlxz.github.io/img/accesorios/aretes/E_M0413.png",    //8
        "https://Karlxz.github.io/img/accesorios/aretes/D_F1370.png",    //9
        "https://Karlxz.github.io/img/accesorios/aretes/C_F1399.png",    //10
        "https://Karlxz.github.io/img/accesorios/aretes/B_F1036.png",    //11
        "https://Karlxz.github.io/img/accesorios/aretes/A_F0901.png",    //12

        //Lentes
        "https://Karlxz.github.io/img/accesorios/lentes/19.png",    //1             543
        "https://Karlxz.github.io/img/accesorios/lentes/18.png",    //2
        "https://Karlxz.github.io/img/accesorios/lentes/17.png",    //3
        "https://Karlxz.github.io/img/accesorios/lentes/16.png",    //4
        "https://Karlxz.github.io/img/accesorios/lentes/15.png",    //5
        "https://Karlxz.github.io/img/accesorios/lentes/14.png",    //6
        "https://Karlxz.github.io/img/accesorios/lentes/13.png",    //7
        "https://Karlxz.github.io/img/accesorios/lentes/12.png",    //8
        "https://Karlxz.github.io/img/accesorios/lentes/11.png",    //9
        "https://Karlxz.github.io/img/accesorios/lentes/10.png",    //10
        "https://Karlxz.github.io/img/accesorios/lentes/09.png",    //11
        "https://Karlxz.github.io/img/accesorios/lentes/08.png",    //12
        "https://Karlxz.github.io/img/accesorios/lentes/07.png",    //13
        "https://Karlxz.github.io/img/accesorios/lentes/06.png",    //14
        "https://Karlxz.github.io/img/accesorios/lentes/05.png",    //15
        "https://Karlxz.github.io/img/accesorios/lentes/04.png",    //16
        "https://Karlxz.github.io/img/accesorios/lentes/03.png",    //17
        "https://Karlxz.github.io/img/accesorios/lentes/02.png",    //18
        "https://Karlxz.github.io/img/accesorios/lentes/01.png",    //19

        //Sombreros
        "https://Karlxz.github.io/img/accesorios/sombreros/18.png",    //1          562
        "https://Karlxz.github.io/img/accesorios/sombreros/17.png",    //2
        "https://Karlxz.github.io/img/accesorios/sombreros/16.png",    //3
        "https://Karlxz.github.io/img/accesorios/sombreros/15.png",    //4
        "https://Karlxz.github.io/img/accesorios/sombreros/14.png",    //5
        "https://Karlxz.github.io/img/accesorios/sombreros/13.png",    //6
        "https://Karlxz.github.io/img/accesorios/sombreros/12.png",    //7
        "https://Karlxz.github.io/img/accesorios/sombreros/11.png",    //8
        "https://Karlxz.github.io/img/accesorios/sombreros/10.png",    //9
        "https://Karlxz.github.io/img/accesorios/sombreros/09.png",    //10
        "https://Karlxz.github.io/img/accesorios/sombreros/08.png",    //11
        "https://Karlxz.github.io/img/accesorios/sombreros/07.png",    //12
        "https://Karlxz.github.io/img/accesorios/sombreros/06.png",    //13
        "https://Karlxz.github.io/img/accesorios/sombreros/05.png",    //14
        "https://Karlxz.github.io/img/accesorios/sombreros/04.png",    //15
        "https://Karlxz.github.io/img/accesorios/sombreros/03.png",    //16
        "https://Karlxz.github.io/img/accesorios/sombreros/02.png",    //17
        "https://Karlxz.github.io/img/accesorios/sombreros/01.png",    //18
    ];

    return carasMascRef[imagen];
    // return new Promise(function(resolve, reject) {
    //     resolve(carasMascRef[imagen]);
    // });
}   



