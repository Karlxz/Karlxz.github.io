function openData(imagen){
    
    var carasMascRef = [
        //29 rostros masculinos
        "https://Karlxz.github.io/img/caras/masculino/J3_M1267.png",    //1
        "https://lh3.googleusercontent.com/d/1plPihb2D8DdJXRAMlYMN6fPCBnaqZBmn",    //2
        "https://lh3.googleusercontent.com/d/1o66kiIu1VqrLmejrpG3BWSRkwlZAURmH",    //3
        "https://lh3.googleusercontent.com/d/1ZaZSY29d8OaXGn3xCjWz6sn1BNmdO4bA",    //4
        "https://lh3.googleusercontent.com/d/1kTYNT662lpiBqW4Ky229xctJ_felQDcY",    //5
        "https://lh3.googleusercontent.com/d/1QAubZcnkzJ2Wge2eOIccTCcUgyCeAkqd",    //6
        "https://lh3.googleusercontent.com/d/1s97Q3OvExKupYEVd5y7LRcBSJUpCupGF",    //7
        "https://lh3.googleusercontent.com/d/1JEqUSkb46e3LUQ9djys9Lk0lGiZGfCCe",    //8
        "https://lh3.googleusercontent.com/d/1HrVdtN_Fxrh1_QvKXs8M4ZSKZ1PRGOf-",    //9
        "https://lh3.googleusercontent.com/d/1zg8lUv1ie7U_Qw4flBVyD7gDDdYYgdMq",    //10
        "https://lh3.googleusercontent.com/d/1cHZbe_yossWfwPOxW56gMdatZRIcELcT",    //11
        "https://lh3.googleusercontent.com/d/1rwDgQv4Z_ih5ZvuqV64fzIyf7vtFAF5g",    //12
        "https://lh3.googleusercontent.com/d/1iX_a0AIHZZMj0lPJRkJclEiXOdOK7dvf",    //13
        "https://lh3.googleusercontent.com/d/1rYOCufxNUf157Z6BcVTN22K7M_K34exu",    //14
        "https://lh3.googleusercontent.com/d/1Hdcbj3qBFP0GM4hELsPgZR-t0MwLmlbc",    //15
        "https://lh3.googleusercontent.com/d/1buIvlYmrbAMYRI37oQ7cljI2qovB9J2J",    //16
        "https://lh3.googleusercontent.com/d/146Tl3h4rABul72_pZyoQvbsVDJkgRjHz",    //17
        "https://lh3.googleusercontent.com/d/1kxXYWSrPBUQw7n8y-eb9lhXORvuCd0ts",    //18
        "https://lh3.googleusercontent.com/d/1Qc2zUWk8UmWB4IRKcy1pkMMugqOwiFww",    //19
        "https://lh3.googleusercontent.com/d/1eDdcCuF7AuU8JvJWphal2HzaST-4CeuF",    //20
        "https://lh3.googleusercontent.com/d/14axwYxNoz2i3PRPfgSRug-XWu5VsN_Dd",    //21
        "https://lh3.googleusercontent.com/d/162Vze-OYTRjGDmIdNkS6I_K-3hJLbmj3",    //22
        "https://lh3.googleusercontent.com/d/1vX6nPyWkLhFjciE23DEoyMSAVw61Ke2X",    //23
        "https://lh3.googleusercontent.com/d/1jxtMTu-YLu8aX8IkCTdi52TIRtecupsk",    //24
        "https://lh3.googleusercontent.com/d/1XgbdXIfd2YBTLwNQxizq80vI88iT4BtT",    //25
        "https://lh3.googleusercontent.com/d/16ZUyxBHb7W4aJni32yyUgF0B1TPeki6T",    //26
        "https://lh3.googleusercontent.com/d/1ucTvYqnXA_J7zsm_UEi133DsYInmnFIq",    //27
        "https://lh3.googleusercontent.com/d/16F6O3ZbByZkNzcphkLBG0YvJRDYkluPh",    //28
        "https://lh3.googleusercontent.com/d/1gVn2owZcOlHpFe4TZOjD9CiGjGWQIucd",    //29
        
        //25 Rostros femeninos
        "https://lh3.googleusercontent.com/d/1oKKsammJeqN81QoQW7rWLQvUwHUdQq4q",    //1
        "https://lh3.googleusercontent.com/d/14wZ26tq7Xx3gbzIPj41nm5Vr4Y_WS1Le",    //2
        "https://lh3.googleusercontent.com/d/18l5-JcWbjsK8R7-1gHk_rb3VX8tR5ZJY",    //3
        "https://lh3.googleusercontent.com/d/13p46aVleCKmI5Ql6ytMrx1X0GcATGqWe",    //4
        "https://lh3.googleusercontent.com/d/1rZ7yocApJe8nDp7Lts0DlbKZhefSrkKB",    //5
        "https://lh3.googleusercontent.com/d/1My2CP6nhVB5LO1hSrxzuj_Y7IZQndyrH",    //6
        "https://lh3.googleusercontent.com/d/1NCrH_CMyug2TAaJFVQDNzzqJSG8qWvFU",    //7
        "https://lh3.googleusercontent.com/d/1k6CSQQ4or_ePJtep7ddIq5D6y5fl8idQ",    //8
        "https://lh3.googleusercontent.com/d/1iBNlHEAFZXn0n_YphrKVl4JZf9_BJNin",    //9
        "https://lh3.googleusercontent.com/d/16CrtrVdRJY6DbfSG0YvQPRpNmow5Q94u",    //10
        "https://lh3.googleusercontent.com/d/1r6HwbNKeDS-qI4m-c9fqoTMhR5caXrVT",    //11
        "https://lh3.googleusercontent.com/d/1sTNNLZhLDP40gV6HboolcDIuQxJCp6iF",    //12
        "https://lh3.googleusercontent.com/d/1Jd2_mPvqKUVALw1VpFOG8aqhGVC3VZBW",    //13
        "https://lh3.googleusercontent.com/d/1Sf8iWJZ4GcLQjqbcbuC8FJqvZc80oeXr",    //14
        "https://lh3.googleusercontent.com/d/19WGvdJBhgRvuGMZrRHqKo-zH4QxG9aIC",    //15
        "https://lh3.googleusercontent.com/d/15uEYxd35mOI8nkpVclkUvKFfkIpFV2hf",    //16
        "https://lh3.googleusercontent.com/d/1kRZjALIp5UvLRJeQ2umsecXSA-mgcLQU",    //17
        "https://lh3.googleusercontent.com/d/1muXKk9-5C1R0VViExrMAMT0UKPpbTk0O",    //18
        "https://lh3.googleusercontent.com/d/1sUvCuiUDhZfhG9wIvMp8SXCTzNYrRD3u",    //19
        "https://lh3.googleusercontent.com/d/1hprqvI6QD_F1h5FTVbYlvp5JwiUuAxMB",    //20
        "https://lh3.googleusercontent.com/d/142fjuR1hu1hHIKCcbPMYsz_3aOtjFBsq",    //21
        "https://lh3.googleusercontent.com/d/19v2WgFOjAIPnq3-qmnT55iBMkRXH4HVj",    //22
        "https://lh3.googleusercontent.com/d/1V65HHSAyLvH3iEjX5RfPAD2hP_UkWtb5",    //23
        "https://lh3.googleusercontent.com/d/1GBkHjlJFrtk8mP-5LeFUuoDq2pBFWY_t",    //24
        "https://lh3.googleusercontent.com/d/1eq_WglfRYCvfv9HPgpXWeC_Ab4sajrfy",    //25
        
        //Ojos masculinos
        "https://Karlxz.github.io/img/ojos/masculino/F4_M0123.png",    //1
    ];

    return carasMascRef[imagen];
}   



