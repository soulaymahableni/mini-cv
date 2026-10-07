# Paramètres de la VM
VM_NAME   = "ubuntu-vagrant"
VM_IP     = "192.168.56.20"
VM_MEMORY = 1024
VM_CPUS   = 1

Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-24.04"
  config.vm.hostname = VM_NAME
  config.vm.network "private_network", ip: VM_IP

  config.vm.provider "virtualbox" do |vb|
    vb.name   = VM_NAME
    vb.memory = VM_MEMORY
    vb.cpus   = VM_CPUS
    vb.customize ["modifyvm", :id, "--paravirtprovider", "kvm"]
  end
end
