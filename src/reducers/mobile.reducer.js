export default function(){
    var id = 0;

    var data = [
        {
            "Category": "Android",
            "Screen Size": "5.5 inch (13.97 cm)",
            "Price": 6999.00,
            "Screen Resolution": "1280 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v7.1.2(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "MIUI",
            "Model": "MI Y1",
            "Brand": "XIAOMI",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'Golden', 'Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 14879.00,
            "Screen Resolution": "800 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v6.1.2(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": false,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "MIUI",
            "Model": "NOKIA 6",
            "Brand": "NOKIA",
            "sim size": 
                { 
                    SIM1: "Micro",
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 7899.00,
            "Screen Resolution": "800 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v6.1.2(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "MIUI",
            "Model": "NOKIA 2",
            "Brand": "NOKIA",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'Gold'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 1500.00,
            "Screen Resolution": "800 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v6.1.2(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "MIUI",
            "Model": "Redmi Note 4",
            "Brand": "XIAOMI",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'Gold', 'Silver', 'Silver Grey', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": false,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxyfen OS",
            "Model": "Galaxay S9",
            "Brand": "Samsung",
            "sim size": 
                { 
                    SIM1: "Micro",
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "ios",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "iPhone 6",
            "Brand": "Apple",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "ios",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 12000.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "iPhone 5",
            "Brand": "Apple",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "ios",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 28000.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "iPhone 6+",
            "Brand": "Apple",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "ios",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 32000.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "iPhone 7",
            "Brand": "Apple",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "ios",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 35000.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "iPhone 7+",
            "Brand": "Apple",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.6 inch (13.37 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v7.1.0(Nougat)",
            "RAM": "4 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "MIUI",
            "Model": "Redmi Note 4",
            "Brand": "XIAOMI",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.6 inch (12.00 cm)",
            "Price": 15000.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "4 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "iPhone 6",
            "Brand": "Apple",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "3 MP",
                    "rear": "112 MP"    
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        }.{
            "Category": "Android",
            "Screen Size": "6.0 inch (14.78 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "Moto G",
            "Brand": "Moto",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "14 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "Galaxay S8",
            "Brand": "Samsung",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'Gold', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "Lenovo 4",
            "Brand": "Lenovo",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "ios",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "iPhone 5x",
            "Brand": "Apple",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 1499.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "Mi3",
            "Brand": "XIAOMI",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "ios",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "iPhone 7",
            "Brand": "Apple",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.5 inch (12.00 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "4 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "Galaxay S2",
            "Brand": "Samsung",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "Mi A1",
            "Brand": "XIAOMI",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "ios",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 35000.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "4 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "iPhone 6+",
            "Brand": "Apple",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "ios",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": false,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "iPhone 6",
            "Brand": "Apple",
            "sim size": 
                { 
                    SIM1: "Micro",
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 1199.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "Moto k",
            "Brand": "Moto",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        },{
            "Category": "Android",
            "Screen Size": "5.0 inch (12.00 cm)",
            "Price": 10000.00,
            "Screen Resolution": "1200 x 720",
            "ppi Pixel Density": "267",
            "Android Version": "v5.1.0(Nougat)",
            "RAM": "2 GB",
            "Internal Memory": "16 GB",
            "Expandable Internal Memory": "128 GB",
            "Dual SIM": true,
            "Sim Slots": "Dual SIM (GSM + GSM)",
            "Battery": "3080mAH",
            "Performance": "octaCore",
            "Finger Print Sensor": true,
            "Finger Print Position": "rear",
            "Custom UI" "Oxygen OS",
            "Model": "Moto g",
            "Brand": "Moto",
            "sim size": 
                { 
                    SIM1: "Micro",
                    SIM2: "Nano"
                },
            "Loudspeaker": true,
            "FM Radio": true,
            "Colors": ['Black', 'White', 'Dark Grey'],
            "Camera":
                {
                    "front": "5 MP",
                    "rear": "16 MP" 
                },
            "Wifi Features": "Mobile Hotspot",
            "Bluetooth": true,
            "Bluetooth version": "v4.1",
        }
    ];

    data.forEach(function (value) {

        value.id = ++id;
    });

    return data;
}
