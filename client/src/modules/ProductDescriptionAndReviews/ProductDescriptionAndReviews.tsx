import { IProduct } from '@/types/Product.type';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductReviews from './ProductReviews/ProductReviews';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const productTest: IProduct = {
    title: 'Barberton Daisy',
    cost: 119.0,
    discount: 0,
    oldCost: 0,
    shortDescription:
        'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
    fullDescription: `The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.  

Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.  

#### Living Room:  
The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  

#### Dining Room:  
The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.  

#### Office:  
The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    mainPreview: '23e759d7-539b-4bd7-b2ca-eee0186659e8.jpg',
    previews: [
        '8e804ddc-a611-4757-bc56-6733c181f654.jpg',
        '6443046e-5e22-405b-91ac-1eab3af6a84c.jpg',
        '431cb07e-4b76-4246-b6f9-4445b251eccb.jpg'
    ],
    rating: 4,
    tags: ['Home', 'Garden', 'Plants'],
    sku: '1995751877966',
    categoriesId: 1,
    id: 1
};

const ProductDescriptionAndReviews = () => {
    return (
        <div className="mt-[92px]">
            <Tabs defaultValue="description">
                <TabsList variant="outline">
                    <TabsTrigger variant="outline" value="description">
                        Product Description
                    </TabsTrigger>
                    <TabsTrigger variant="outline" value="reviews">
                        Review (19)
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                    <ProductDescription {...productTest} />
                </TabsContent>
                <TabsContent value="reviews">
                    <ProductReviews id={productTest.id} />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ProductDescriptionAndReviews;
