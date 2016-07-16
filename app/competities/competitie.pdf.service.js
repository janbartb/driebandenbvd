System.register(["@angular/core", "./competitie.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, competitie_service_1;
    var CompetitiePdfService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (competitie_service_1_1) {
                competitie_service_1 = competitie_service_1_1;
            }],
        execute: function() {
            CompetitiePdfService = (function () {
                function CompetitiePdfService(compService) {
                    this.compService = compService;
                    this.logo = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAA8AGkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKAI7idbaBmkZVVAWZicBQOSSabZXkV/CJIZI5o26OjBlbt1FY/xOGfht4iz0OmXOc/8AXJq539mDA+BWg+m2b/0fJWPtv3ypd039zS/UXNrY9AooorYYUUUUAfmN/wAFVvjZ8RoP27rjwdoPxM8c+C/Deh+AtD1mCz8O3kNiJru+1DXIbiWV/KZ5Mx6daqqs21NrlQDI5bwBPiF8VZG2r8evjkzeg8Rxn/2hXr3/AAVO/wCUnfiL/sl/hP8A9OviqvnPx/L4RXxT8OYPiDqWl6X4AvvHGk2/iSbVNSGnaebAysZFuZi6KsWVUncwXIGe1fk+d5hmE8+eAw9aUIycUrbK8V0Pj8fiMQ8w9hTm4ptL70jrbrx18WPJZW+PXx1h3gruHiOMMvuP3HUfjXf+Cv8Ago3+0h8EtWbVv+Ewj+NWl24L3HhrxLpOm6XqF+vy5S11DT4LaKCUbSUE9tKjF2V2UMskUf7b/hr9hjwT+zT4n134BfET4YQ/F7SrZX8Naf4I+Iy6le63dGeHFpJpsV1Kt9HIFKFJIXMavI6NCw81fP5Yx9rZU5UMQpznjNZ5zis3ySvTbxLqKXRrtbRrXfuncnGVcZgJxvV5rn7Efs5ftAeHP2p/gT4T+InhO4e48O+MdMh1Oy83aJoVkXLQzKrMEmifdHImSUkjdTyprtq/K/4I/HL4sfsff8EYfBvxE+Htt4P0/TdQ+IWs6pqU3ibQ7nUlTw/rHiO/NjqVtDb3lruRjd2MxYybfssskozsVXy/E/8AwVX/AGp9J8P6ldWOofArWNRs7WWa104fDzVrc38yoxSDzP7efy97AJv2Pt3Z2tjB/RMVnuDwns44uXI5q6TT/NK2nU+lq5hRpcqrOzfk/wDI/WSjNcf8E/jZofx4+B/hT4gaJcI3h/xdotrrtnM7jC29xCsylj0BCtz6EH0r8z9N/wCCxPx8+KsEniTwne/B3RfCet3E91oFrqfgbU9RvG00zP8AY5pZ01q3V3mtxFMQsKBTLtG7buPRmGaYXAwVTFT5U3ZaN6/JNmmJxlHDxUqzsn6/ofYH/BYD4w+J/gd+wxq+teEfEE3hfV7zxH4c0R9SitrW4kt7W/1yxsrrat1FLDuNvPKoZ42C5zjIFfAfjTxf8br6w/4TK48UfGv4X+Gden3WWmaTrP8AxJ9LViFiijZrcOqsChDyqgkdyRksBXaftE/tH/FD9sr/AIJJePtc+Iv/AAhYs4vi74V8P+HtT8PaNcaZHqMVt4l0iC6me2nvLsjy74XUCkyrv+zFgoVkZqOr/wDBQvxN8WvCWoeB9Q8KaRDqN9CbLU9Q+3xSwiFvleSOFWL7iM7dyrtYgttIAP5P4mcRZ9g62D/sKj7SFTWpK/K4Qutde99brocWMjGrCVRV3T5YOSSW/r1Xppv5HnM/xB+K0sLovx++OkTMpUOviKLchx1GbcjI68gj2NegeCf+Cgv7SHwk8QLqkXxGh+K1iF/0jQPGulabp6zgK5/0e90qyt2t3Zig3Sw3C4X7q5zXbfsC/wDBKXw5+1n+xN8MfiZq3xQ+Mmh+LvF2lpq+oT6Zq1jLamSTzA8aWl3Zz2yx8ghRHldq7SMc/Pd34P8AE3wg+JPjL4b+Nbqz1HxZ8O9UXTLnVLW1NrBr9tJbxXNnqKQksIvOgmUSRqzKk8Nwikqor0syjxBlNJYyWI543V1vv3TW3ozxcQsxwcFWlU5l/W90frH+xV+3D4Q/bl8A6prHhu31rRNW8N6i+ka/4e1uGOHVNDugodVlWN5InjlidJYpoZJIpY5AVckMF9mwfWvyS/4J0fES5+En/BRXwSsMk39n/FbTb7wVqVukjbZri0trrWdPuGUnaFgjtdXjBUBidS5DAAx/rX/wOv0DI8yWYYKGKtZvdeadn8ux9Jl+K+sUFV77+p+VH/BU7/lJ14i/7Jf4T/8ATr4qrwjXfFTeFP7PFvZ6xqepatfwaXp1hpVs1xeX9zM22OKNQQMnkksVACnnOAfd/wDgqd/yk78Rf9kv8J/+nXxVXguqazqng7xv4B8UaTo//CQXHgrxdpviCTTheJaNdxW7sXRZH+VWwcjPXFflPEVKjU4jdPEO0G4Xd7WXLHqz5LM4wlmTjUdldX+5Gh4zu/HPw58O3Gr+Mvhf8ZvCnhyzR5L3V9T8MXEmn6fGqNI0ty9uZTBAqoxaeVVijAy7qCDXF/GP4WXHxUt9Fns9Wj8nSZnun0e+aebw94nRlGLfUobaaCW4tjjGxZhGVkfekoIC/bev/wDBcjxte6PcRaT+z3JFqcqGO2k1TxtZrYxOeA0xhjkl8terCNGYgEAZNfGnwX+HrfCT4OeE/CrXQvm8M6NaaU1yE2C4aCFIy4XJwCVyBk4BpZ5h8uy6dLE5TW5p32updN9tO35WsRjqeGw0o1cHO7v5P9D9R/2Mfjvov/BTD9jjxd4f8V+ENP8ADUtpLf8Aw/8AF/huyuGurCANaxlRbSvDCXgmsLu2mTMS7BPsIJQk/mV4U8P658OZ9U8FeKJpZ/Fvw71Kbwzq88sflyX0lsQIb4oSdou7Zre7UZYBboDc2Mn7A/4IVaTcX3xW/aI16O3LaSt94f8ADy3m9Csl7a2Ut1cQgBi37uPUbUkkAbpWUElHA5j/AIK//BWD4QftX+EviLp8IttL+L1u/hzXNqhY31uxt3uLCc4A/eTWEV5C7sSWFhZIANnP1/EeEnmWRwxclapFKf4e9+GvyPZzKjLFYCNZr3kr/wCf+ZwHw6/ank+G3/BHT4wfCex1WPT/ABhpfip/APh6L7Uouzp3iO4Fxbz20WNwS1tLvUUQ5cY0W4fcojdIvHPFy6hoPhO30fwXp9vN4j1OW38PeFNNYnypb+4ZbeziPIPlo7KznI2xRyMWUKSKGrfCxdV+L2m+KDqE0dvZWwWfTVQ+XeXUS3MdpdM2/AaCG/1GMLsO77ZuY5ij2/S3/BLX4Jp8dv25bjxHfQfaPD/wP05byEMreW/iHUYpIoDuA2s9rp32lmjY5X+1baTb/q2HztPFf29i8JhX8NON5+q3++y+886NV5hWo0ntFa/r/Xmesf8ABUf9nvT/ANmj/gjT4d+Gvhi5ma18J6/4E0e0vZ1VJ7qWPxJpStdTeWoUzSybpZGC8u7NjmvzN+G8Osal8Q9P0VbHULC50i/S5ujMR5Npyu5kYcSEquPlJ3ZGdo3Gv1s/4LurI/8AwTs1BYhI0x8b+DAgjO1y3/CT6XjB7H0I714b47/a3+D/AMQv2bF8K2Wk2UWqWNokek6ZaQJHPpNyoASRVGHhKnl8gEqXD5DEN+lZlUqRo1VTnGKcHuv+Dt+v3H2X+sWOy2jXoYOUIxqwcZcyu7X6dna59Nf8EYP+UVnwM/7FaD+bV8T/APBRT+x/+HofxP8A7G87f/wiXhX+2d3m+X/amdW37d/y5+w/2Znyvk6Z+ffU37In/BR34sfsi/sp+DPhjY/Cf4Y69/whekrpkGqz/EbULb7WVziV7ddDfYCTkoJWx03968s1XW/EHj/4jeLfGvjDUrTVfFnjbUxqV9Ja232e1so0git7extwSzeRBDCigscu7TSkK0zKPj+K+IcBVyuWHoVFOUuXRa2s07/gfN5tmWHnhPZU5KTdv0Lfw00ttY/a3/Z9hitWvLhfiXp88UaReZIBFa3ssjqACfkhSV2I+6iOxwqsa/bTNfkz/wAE0/hTqHx1/b68Oa1Yw3H/AAivwSW91nVtTSMGH+27qwl0+z0sOWGX+xahf3UyKrNEFsSxQTqH/Wjj0/WvZ4Jws6OVQ9orOTcvk9vw1O3IaUoYRc3VtnwP/wAFB/8Agnt8Yvjx+2NdfEL4f2nw01LQ9S8GaN4dmh8Q+Kb7Rrq3uLG+1i4ZlWDTLxJI3TUowCXQgxv8pBBryH/h1p+05/0LnwJ/8OVq3/zPV+rFFehjeGstxdZ4jEUuaTtd3ktlZbNLY6a+V4WtP2lSN36v/M/Kcf8ABLP9prPPhv4E+/8AxcvVv/merc8D/wDBFz42eLlEfjL4rfDvwZamOPzv+ES8O3WqagWKt5ghub2ZIYth2bXe1m3jJKxkAH9PKKyo8J5TSlzQoq/m2/zbJhk+Di7qC/F/mzz/APZj/Zi8G/sgfBzTfAvgXTZNN0HTXln/AH9zJdXV5cTSNLPc3E8haSaaWR2dndiST2AAHM/t/fsyTftffsj+MfAthcWln4gvbaO/8PXd1I0cFlrFpMl3p80jqjusS3UMO8opYx7wASa9mor6CUU1yvY9BxTVmflOP+CWv7TZbLeG/gR7hfiVqwH4f8U9X3F/wTr/AGTLn9jj9mTT/DOsXGl3/jDVr268QeKb7Twxt7rU7uQySLHI6rJJDAnlWsLyKr+RawgquAi+7UV5eX5HgcDJzwtPlctHq3+bZy4bL6GHblRjZv1/U+f/APgpp+zT4q/a1/ZLvvB3gp/D6+Ix4g0DW7VdbvZrGxmGnaxZ38kTzQwTvGXjtmVWET4ZhkYzXxOP+CWf7TZOf+Eb+BOSACf+FlaryBnH/Mve5/M1+rFFGYZJgsc1LFQ5mtFq1+TQYrA0MQ060b29f0Pyn/4daftOf9C38CP/AA5Wrf8AzPVveAf+CLfxm8eXa/8ACd/FTwb8P9K8xHltvA2ly6tqrpuffEmoagqQR4TYBJ9gYlssAgUBv06orjo8J5RSlzwoK/nd/g20Y08nwcHzRgvxf5s4T9nL9mvwV+yb8K7HwX4B0ODQfDtg8kywrLJPNcTSMXlnnmkZpZ5pGJZpZGZ2J5Jru6KK+i20PSP/2Q==';
                    this.lenChar = 2.5;
                    this.lenDecimal = 1.25;
                }
                CompetitiePdfService.prototype.makePdfCompetitieStand = function (competitie) {
                    this.comp = competitie;
                    var ovzData = this.compService.getOvzCompetitie(competitie);
                    ovzData = ovzData.sort(function (a, b) {
                        return a.rangPunt - b.rangPunt;
                    });
                    var doc = this.getNewPdf('landscape', 'mm', 'A4');
                    // title
                    doc.setFontSize(24);
                    doc.setFontType('bolditalic');
                    doc.text(20, 24, 'Driebanden competitie ' + this.comp.compId);
                    // logo
                    doc.addImage(this.logo, 'JPEG', 250, 10, 28, 16);
                    // line
                    doc.setLineWidth(0.5);
                    doc.line(20, 27, 277, 27);
                    // header 1
                    doc.setFontType('bold');
                    doc.setFontSize(12);
                    doc.text(77, 35, 'te spelen');
                    doc.text(114, 35, 'rang in');
                    doc.text(154, 35, 'score');
                    doc.text(203, 35, 'totalen');
                    doc.text(253, 35, 'hoogste');
                    // header 2
                    doc.text(20, 40, 'Speler');
                    doc.text(68, 40, 'caramb');
                    doc.text(90, 40, 'gemid');
                    doc.text(109, 40, 'punt');
                    doc.text(124, 40, 'rend');
                    doc.text(139, 40, 'punt');
                    doc.text(159, 40, 'rend');
                    doc.text(175, 40, 'wed');
                    doc.text(189, 40, 'caramb');
                    doc.text(209, 40, 'beurt');
                    doc.text(226, 40, 'gemid');
                    doc.text(246, 40, 'serie');
                    doc.text(264, 40, 'gemid');
                    // lines
                    doc.setDrawColor(160, 160, 160);
                    doc.setLineWidth(1);
                    // horizontal fat
                    doc.line(20, 43, 277, 43);
                    // vertical fat
                    var osTsCar = 84.5;
                    var osTsGem = 104;
                    var osRangP = 119.5;
                    var osRangR = 135;
                    var osPunt = 150;
                    var osRend = 170;
                    var osWed = 185;
                    var osTotC = 205;
                    var osTotB = 221;
                    var osTotG = 240;
                    var osHSer = 257;
                    var osHGem = 277;
                    var aantSpl = (competitie.spelers) ? competitie.spelers.length : 0;
                    var lineHeight = 8;
                    var len = 12 + (lineHeight * aantSpl);
                    doc.line(64, 32, 64, 32 + len);
                    doc.line(osTsGem, 32, osTsGem, 32 + len);
                    doc.line(osRangR, 32, osRangR, 32 + len);
                    doc.line(osWed, 32, osWed, 32 + len);
                    doc.line(osTotG, 32, osTotG, 32 + len);
                    // vertical thin
                    doc.setLineWidth(0.2);
                    len -= 5;
                    doc.line(osTsCar, 37, osTsCar, 37 + len);
                    doc.line(osRangP, 37, osRangP, 37 + len);
                    doc.line(osPunt, 37, osPunt, 37 + len);
                    doc.line(osRend, 37, osRend, 37 + len);
                    doc.line(osTotC, 37, osTotC, 37 + len);
                    doc.line(osTotB, 37, osTotB, 37 + len);
                    doc.line(osHSer, 37, osHSer, 37 + len);
                    // spelers
                    doc.setFontType('normal');
                    var osVertStart = 44;
                    var self = this;
                    ovzData.forEach(function (speler) {
                        osVertStart += lineHeight;
                        doc.line(20, osVertStart, 277, osVertStart);
                        doc.text(20, osVertStart - 2.5, speler.splNaam);
                        var txt = '' + speler.tsCar;
                        doc.text(self.getPosition(txt, osTsCar), osVertStart - 2.5, txt);
                        txt = '' + speler.tsGemid;
                        doc.text(self.getPosition(txt, osTsGem), osVertStart - 2.5, txt);
                        txt = '' + speler.rangPunt;
                        doc.text(self.getPosition(txt, osRangP), osVertStart - 2.5, txt);
                        txt = '' + speler.rangRend;
                        doc.text(self.getPosition(txt, osRangR) - 0.5, osVertStart - 2.5, txt);
                        doc.setFontType('bold');
                        doc.setTextColor(255, 0, 0);
                        txt = '' + speler.punten;
                        doc.text(self.getPosition(txt, osPunt), osVertStart - 2.5, txt);
                        doc.setFontType('normal');
                        doc.setTextColor(0, 0, 0);
                        txt = self.rondAf(speler.rendement, 2);
                        doc.text(self.getPosition(txt, osRend), osVertStart - 2.5, txt);
                        txt = '' + speler.aantWed;
                        doc.text(self.getPosition(txt, osWed) - 0.5, osVertStart - 2.5, txt);
                        txt = '' + speler.totCar;
                        doc.text(self.getPosition(txt, osTotC), osVertStart - 2.5, txt);
                        txt = '' + speler.totBrt;
                        doc.text(self.getPosition(txt, osTotB), osVertStart - 2.5, txt);
                        txt = self.rondAf(speler.totGemid, 3);
                        doc.text(self.getPosition(txt, osTotG), osVertStart - 2.5, txt);
                        txt = '' + speler.hgSerie;
                        doc.text(self.getPosition(txt, osHSer), osVertStart - 2.5, txt);
                        txt = self.rondAf(speler.hgGemid, 3);
                        doc.text(self.getPosition(txt, osHGem), osVertStart - 2.5, txt);
                    });
                    doc.setDrawColor(0, 0, 0);
                    doc.setLineWidth(0.25);
                    doc.line(20, 185, 277, 185);
                    doc.text(20, 190, 'Nog te spelen : ' + this.compService.getNogTeSpelenWeds(competitie) + ' wedstrijden');
                    var datum = competitie.wijzigDatum.substr(0, 10);
                    doc.text(221, 190, 'Laatst gewijzigd : ' + datum);
                    //
                    // OVERZICHT NOG TE SPELEN
                    //
                    doc.addPage();
                    // title
                    doc.setFontSize(22);
                    doc.setFontType('bolditalic');
                    doc.text(20, 24, 'Driebanden competitie ' + this.comp.compId);
                    // title
                    doc.setFontSize(18);
                    doc.text(20, 31, 'Nog te spelen wedstrijden');
                    // logo
                    doc.addImage(this.logo, 'JPEG', 250, 16, 28, 16);
                    // line
                    doc.setLineWidth(0.5);
                    doc.line(20, 34, 277, 34);
                    //
                    if (this.compService.getNogTeSpelenWeds(this.comp) == 0) {
                        doc.text(20, 60, 'Et zijn geen te spelen wedstrijden.');
                        doc.save('comp' + this.comp.compId + '.pdf');
                        return;
                    }
                    var spelers = this.comp.spelers.sort(function (a, b) {
                        return (a.naam < b.naam) ? -1 : 1;
                    });
                    doc.setFontSize(12);
                    doc.setFontType('normal');
                    //
                    var y = 34;
                    spelers.forEach(function (speler) {
                        y += 7;
                        doc.text(20, y, speler.naam);
                        doc.text(45, y, ':');
                        var x = 33;
                        spelers.forEach(function (teg) {
                            if (speler.spelerId == teg.spelerId) {
                                return;
                            }
                            if (speler.wedstrijden) {
                                var wed = speler.wedstrijden.find(function (wedstr) {
                                    return wedstr.tegenstanderId === teg.spelerId;
                                });
                                if (!wed) {
                                    x += 15;
                                    doc.text(x, y, teg.spelerId);
                                }
                            }
                            else {
                                x += 15;
                                doc.text(x, y, teg.spelerId);
                            }
                        });
                    });
                    // saven
                    doc.save('comp' + this.comp.compId + '.pdf');
                };
                CompetitiePdfService.prototype.getPosition = function (txt, offset) {
                    var len = txt.length * this.lenChar;
                    if (txt.indexOf('.') >= 0) {
                        len = len - this.lenChar + this.lenDecimal;
                    }
                    len += 1;
                    return offset - len;
                };
                CompetitiePdfService.prototype.rondAf = function (getal, aantDec) {
                    var factor = (aantDec == 2) ? 100 : 1000;
                    var val = getal * factor;
                    return (Math.round(val) / factor).toFixed(aantDec);
                };
                CompetitiePdfService.prototype.getNewPdf = function (orientatie, uom, paperSize) {
                    return new jsPDF(orientatie, uom, paperSize);
                };
                CompetitiePdfService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [competitie_service_1.CompetitieService])
                ], CompetitiePdfService);
                return CompetitiePdfService;
            }());
            exports_1("CompetitiePdfService", CompetitiePdfService);
        }
    }
});
//# sourceMappingURL=competitie.pdf.service.js.map