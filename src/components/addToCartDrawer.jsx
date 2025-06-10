import { ShoppingCartIcon } from '@phosphor-icons/react';
import { Drawer } from 'vaul';

export default function VaulDrawer(product) {
    const { addToCart, cart  } = product; // Assuming addToCart is passed as a prop
    return (
        <Drawer.Root>
            <Drawer.Trigger className="">
                <button
                  onClick={() => addToCart(product)}
                  className="text-white transition-colors mt-0 sm:mt-0 bg-primary hover:bg-primary/70 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center gap-3 justify-center"
                >
                  <ShoppingCartIcon size={20} weight="bold" />
                  Add to cart
                </button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 z-100" />
                <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none z-100">
                    <div className="p-4 bg-white rounded-t-[10px] flex-1">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"> </div>
                        <div>Test</div>
                        <div>Test</div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}