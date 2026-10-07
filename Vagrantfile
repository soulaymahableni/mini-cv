Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-24.04"
  config.vm.hostname = "ubuntu-vagrant"

  config.vm.provider "virtualbox" do |vb|
    vb.name   = "ubuntu-vagrant"
    vb.memory = 1024
    vb.cpus   = 1
    vb.customize ["modifyvm", :id, "--paravirtprovider", "kvm"]
  end
end
