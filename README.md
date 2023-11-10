[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/DUj7T_Sj)


Visit responsive website travel at https://responsive-website.putrinov.site/

## Deployment Process

### Sign up on Vercel
1. First visit https://vercel.com/
2. Click Sign Up with GitHub then Fill your GitHub username and password then click sign in, you will get redirect to netlify account dashboard.
![](assets/documentation/vercel.png)

### Deploy Website from Github to Vercel
1. On Vercel Dashboard Click add new site choose import an existing project
![](assets/documentation/vercel1.png)
2. Choose Repository you want to deploy 
![](assets/documentation/vercel2.png)
3. Then Click Deploy 
![](assets/documentation/vercel3.png)

### Buy Domain on Niagahoster
1. visit niagahoster.com then create account
2. Search your prefered domain name and Choose domain name that you want to buy
![](assets/documentation/site1.png)
3. Choose your payment option to buy your domain and finish the transaction
![](assets/documentation/site.png)
4. Congrats you are now have your own domain name

### Connect Niagahoster with Cloudflare
1. visit cloudflare.com and create account
2. register your domain that you buy on niagahoter, Click continue, if there is warning ignore it. we will add the DNS record after niagahoster and cloudflare succed to connect
![](assets/documentation/cloudflare1.png)
![](assets/documentation/cloudflare2.png)
3. Go to niagahoster then change the nameserver on niagahoster with nameserver that cloudflare provided. it take times to connect niagahoster and cloudflare aproximatly 1-24 hours and Change DNSSEC on niagahoster after Turn DNSSEC on Through cloudflare
![](assets/documentation/Screenshot%20(160).png)
![](assets/documentation/site2.png)
![](assets/documentation/site3.png)
4. Back to cloudflare check if DNS record updated 
![](assets/documentation/cloudflare3.png)

### Add Custom Domain to Vercel and Connect it with Cloudflare
1. Go to Cloudflare, in the DNS record add the IP address of your Vercel deployment website! It's important to use the "CNAMA" type.
![](assets/documentation/cloudflare4.png)
2. Go to your vercel dashboar, click domain at your deployment website and add domain. Check on your vercel dashboard to ensure your domain is properly cofigurated and connected to your netlify website
![](assets/documentation/vercel4.png)

